import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { CreateSiteForm } from "@/components/dashboard/create-site-form";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const sites = await db.site.findMany({
    where: { userId: session.userId },
    include: {
      _count: { select: { leads: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  // Get lead stats
  const totalLeads = sites.reduce((sum, s) => sum + s._count.leads, 0);
  const newLeads = await db.lead.count({
    where: {
      site: { userId: session.userId },
      status: "new",
    },
  });
  const thisMonthLeads = await db.lead.count({
    where: {
      site: { userId: session.userId },
      createdAt: {
        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      },
    },
  });

  const stats = [
    { label: "Total Leads", value: totalLeads.toString() },
    { label: "New (Unread)", value: newLeads.toString() },
    { label: "This Month", value: thisMonthLeads.toString() },
    { label: "Active Sites", value: sites.length.toString() },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        Overview of your lead generation sites and performance.
      </p>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
            <p className="mt-1 text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Sites */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Your Sites</h2>
        </div>

        {sites.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
            <h3 className="text-base font-medium">No sites yet</h3>
            <p className="mt-1 text-sm text-zinc-500">
              Create your first lead generation site to get started.
            </p>
            <CreateSiteForm />
          </div>
        ) : (
          <>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {sites.map((site) => (
                <div
                  key={site.id}
                  className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{site.name}</h3>
                      <p className="text-sm text-zinc-500">/s/{site.slug}</p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        site.published
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      }`}
                    >
                      {site.published ? "Live" : "Draft"}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500">
                    <span>{site._count.leads} leads</span>
                    <span>&middot;</span>
                    <a
                      href={`/s/${site.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      View site
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <CreateSiteForm />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
