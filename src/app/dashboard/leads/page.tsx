import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { LeadTable } from "@/components/dashboard/lead-table";

export default async function LeadsPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const leads = await db.lead.findMany({
    where: { site: { userId: session.userId } },
    include: { site: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Leads</h1>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        All form submissions across your sites.
      </p>

      {leads.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
          <svg
            className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h3 className="mt-4 text-base font-medium">No leads yet</h3>
          <p className="mt-1 text-sm text-zinc-500">
            Leads will appear here when visitors submit forms on your sites.
          </p>
        </div>
      ) : (
        <LeadTable leads={leads} />
      )}
    </div>
  );
}
