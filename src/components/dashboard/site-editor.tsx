"use client";

import { Button } from "@/components/ui/button";
import { updateSite } from "@/lib/actions";
import { useActionState } from "react";

interface Site {
  id: string;
  slug: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  heroTitle: string;
  heroText: string;
  published: boolean;
}

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800";

export function SiteEditor({ site }: { site: Site }) {
  const [state, action, pending] = useActionState(updateSite, {});

  return (
    <form action={action} className="mt-8 space-y-8">
      <input type="hidden" name="siteId" value={site.id} />

      {state.error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
          {state.error}
        </div>
      )}

      {/* Business Info */}
      <section className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-base font-semibold">Business Information</h2>
        <p className="mt-1 text-sm text-zinc-500">Basic info shown on your lead gen page.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Business Name</label>
            <input name="name" defaultValue={site.name} className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Phone Number</label>
            <input name="phone" defaultValue={site.phone} className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Email</label>
            <input name="email" type="email" defaultValue={site.email} className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Address</label>
            <input name="address" defaultValue={site.address} className={inputClass} />
          </div>
        </div>
      </section>

      {/* Hero Content */}
      <section className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-base font-semibold">Hero Section</h2>
        <p className="mt-1 text-sm text-zinc-500">The first thing visitors see.</p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Headline</label>
            <input name="heroTitle" defaultValue={site.heroTitle} className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Subtitle</label>
            <textarea
              name="heroText"
              rows={3}
              defaultValue={site.heroText}
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>
      </section>

      {/* Publishing */}
      <section className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold">Publish</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Your site is at{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                /s/{site.slug}
              </code>
            </p>
          </div>
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              name="published"
              defaultChecked={site.published}
              className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm font-medium">Live</span>
          </label>
        </div>
      </section>

      <div className="flex gap-3">
        <Button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700"
          disabled={pending}
        >
          {pending ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
