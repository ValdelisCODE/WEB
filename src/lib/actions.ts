"use server";

import { db } from "@/lib/db";
import { createSession, deleteSession, getSession } from "@/lib/auth";
import { hashSync, compareSync } from "bcryptjs";
import { redirect } from "next/navigation";

interface AuthResult {
  error?: string;
}

export async function register(
  _prev: AuthResult,
  formData: FormData,
): Promise<AuthResult> {
  const name = formData.get("name") as string;
  const email = (formData.get("email") as string)?.toLowerCase().trim();
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    return { error: "All fields are required" };
  }
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters" };
  }

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return { error: "An account with this email already exists" };
  }

  const user = await db.user.create({
    data: { name, email, password: hashSync(password, 12) },
  });

  await createSession({ userId: user.id, email: user.email });
  redirect("/dashboard");
}

export async function login(
  _prev: AuthResult,
  formData: FormData,
): Promise<AuthResult> {
  const email = (formData.get("email") as string)?.toLowerCase().trim();
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !compareSync(password, user.password)) {
    return { error: "Invalid email or password" };
  }

  await createSession({ userId: user.id, email: user.email });
  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/");
}

export async function createSite(
  _prev: AuthResult,
  formData: FormData,
): Promise<AuthResult> {
  const session = await getSession();
  if (!session) return { error: "Unauthorized" };

  const name = formData.get("name") as string;
  const slug = (formData.get("slug") as string)
    ?.toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-");
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;

  if (!name || !slug) {
    return { error: "Site name and URL slug are required" };
  }

  const existing = await db.site.findUnique({ where: { slug } });
  if (existing) {
    return { error: "This URL is already taken" };
  }

  const site = await db.site.create({
    data: {
      name,
      slug,
      phone: phone ?? "",
      email: email ?? "",
      userId: session.userId,
    },
  });

  // Create default services
  const defaults = [
    { title: "Local SEO", description: "Dominate Google Maps and local search results.", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z", order: 0 },
    { title: "Google & Facebook Ads", description: "Targeted campaigns that reach your ideal customers.", icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3", order: 1 },
    { title: "Website Design", description: "High-converting websites that turn visitors into customers.", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3", order: 2 },
    { title: "Reputation Management", description: "Build a 5-star online reputation across all platforms.", icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z", order: 3 },
  ];

  await db.service.createMany({
    data: defaults.map((s) => ({ ...s, siteId: site.id })),
  });

  redirect("/dashboard");
}

export async function updateSite(
  _prev: AuthResult,
  formData: FormData,
): Promise<AuthResult> {
  const session = await getSession();
  if (!session) return { error: "Unauthorized" };

  const siteId = formData.get("siteId") as string;
  const site = await db.site.findFirst({
    where: { id: siteId, userId: session.userId },
  });
  if (!site) return { error: "Site not found" };

  await db.site.update({
    where: { id: siteId },
    data: {
      name: (formData.get("name") as string) || site.name,
      phone: (formData.get("phone") as string) ?? site.phone,
      email: (formData.get("email") as string) ?? site.email,
      address: (formData.get("address") as string) ?? site.address,
      heroTitle: (formData.get("heroTitle") as string) || site.heroTitle,
      heroText: (formData.get("heroText") as string) || site.heroText,
      published: formData.get("published") === "on",
    },
  });

  redirect("/dashboard/site");
}

export async function updateLeadStatus(leadId: string, status: string) {
  const session = await getSession();
  if (!session) return;

  await db.lead.updateMany({
    where: {
      id: leadId,
      site: { userId: session.userId },
    },
    data: { status },
  });
}
