import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { SiteEditor } from "@/components/dashboard/site-editor";

export default async function SiteEditorPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const site = await db.site.findFirst({
    where: { userId: session.userId },
    orderBy: { createdAt: "desc" },
  });

  if (!site) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Edit Site</h1>
        <div className="mt-8 rounded-xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
          <h3 className="text-base font-medium">No site to edit</h3>
          <p className="mt-1 text-sm text-zinc-500">
            Go to the{" "}
            <a href="/dashboard" className="text-indigo-600 hover:underline">
              Dashboard
            </a>{" "}
            to create your first site.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Edit Site</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Customize your lead generation page content.
          </p>
        </div>
        <a
          href={`/s/${site.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          Preview
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <SiteEditor site={site} />
    </div>
  );
}
