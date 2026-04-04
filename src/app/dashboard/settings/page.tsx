import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const user = await db.user.findUnique({
    where: { id: session.userId },
    select: { name: true, email: true, createdAt: true },
  });
  if (!user) redirect("/login");

  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        Manage your account settings.
      </p>

      <section className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-base font-semibold">Account</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
            <span className="text-sm text-zinc-500">Name</span>
            <span className="text-sm font-medium">{user.name}</span>
          </div>
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
            <span className="text-sm text-zinc-500">Email</span>
            <span className="text-sm font-medium">{user.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-500">Member since</span>
            <span className="text-sm font-medium">
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-base font-semibold">Plan</h2>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Free Plan</p>
            <p className="text-sm text-zinc-500">1 site, unlimited leads</p>
          </div>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
            Current Plan
          </span>
        </div>
      </section>
    </div>
  );
}
