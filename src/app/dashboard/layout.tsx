import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/shell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const user = await db.user.findUnique({
    where: { id: session.userId },
    select: { name: true, email: true },
  });
  if (!user) redirect("/login");

  const sites = await db.site.findMany({
    where: { userId: session.userId },
    select: { id: true, name: true, slug: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <DashboardShell userName={user.name} sites={sites}>
      {children}
    </DashboardShell>
  );
}
