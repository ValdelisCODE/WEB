import { NextResponse } from "next/server";
import type { LeadFormData, ApiResponse } from "@/types";

/** In-memory store for demo. Replace with your database in production. */
const leads: (LeadFormData & { createdAt: string })[] = [];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadFormData;

    // Validate required fields
    const required: (keyof LeadFormData)[] = ["name", "email", "phone", "business"];
    for (const field of required) {
      if (!body[field]?.trim()) {
        return NextResponse.json<ApiResponse>(
          { success: false, error: `${field} is required` },
          { status: 400 },
        );
      }
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Invalid email address" },
        { status: 400 },
      );
    }

    const lead = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      business: body.business.trim(),
      service: body.service?.trim() ?? "",
      message: body.message?.trim() ?? "",
      createdAt: new Date().toISOString(),
    };

    // Store lead (replace with DB insert in production)
    leads.push(lead);

    // TODO: In production, add here:
    // - Save to database (Prisma, Drizzle, etc.)
    // - Send notification email (Resend, SendGrid, etc.)
    // - Push to CRM (HubSpot, Salesforce, etc.)
    // - Send webhook to Slack/Discord

    console.log(`[Lead] New submission from ${lead.name} at ${lead.business}`);

    return NextResponse.json<ApiResponse<{ id: number }>>(
      { success: true, data: { id: leads.length } },
      { status: 201 },
    );
  } catch {
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Invalid request body" },
      { status: 400 },
    );
  }
}

export async function GET() {
  // Protected in production — add auth check
  return NextResponse.json<ApiResponse<{ count: number }>>({
    success: true,
    data: { count: leads.length },
  });
}
