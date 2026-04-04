import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { ApiResponse, LeadFormData } from "@/types";

interface Context {
  params: Promise<{ slug: string }>;
}

export async function POST(request: Request, context: Context) {
  try {
    const { slug } = await context.params;

    const site = await db.site.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!site) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Site not found" },
        { status: 404 },
      );
    }

    const body = (await request.json()) as LeadFormData;

    // Validate
    if (!body.name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Name, email, and phone are required" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    const lead = await db.lead.create({
      data: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone.trim(),
        business: body.business?.trim() ?? "",
        service: body.service?.trim() ?? "",
        message: body.message?.trim() ?? "",
        siteId: site.id,
      },
    });

    return NextResponse.json<ApiResponse<{ id: string }>>(
      { success: true, data: { id: lead.id } },
      { status: 201 },
    );
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
