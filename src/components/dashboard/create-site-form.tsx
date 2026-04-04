"use client";

import { Button } from "@/components/ui/button";
import { createSite } from "@/lib/actions";
import { useActionState } from "react";
import { useState } from "react";

export function CreateSiteForm() {
  const [state, action, pending] = useActionState(createSite, {});
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <Button
        onClick={() => setOpen(true)}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700"
      >
        + Create New Site
      </Button>
    );
  }

  return (
    <form
      action={action}
      className="mt-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <h3 className="font-semibold">Create a New Site</h3>

      {state.error && (
        <div className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
          {state.error}
        </div>
      )}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Business Name *</label>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800"
            placeholder="Smith's Plumbing"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">URL Slug *</label>
          <div className="flex items-center">
            <span className="rounded-l-lg border border-r-0 border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800">/s/</span>
            <input
              name="slug"
              required
              className="w-full rounded-r-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800"
              placeholder="smiths-plumbing"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Phone</label>
          <input
            name="phone"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800"
            placeholder="hello@business.com"
          />
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <Button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700"
          disabled={pending}
        >
          {pending ? "Creating..." : "Create Site"}
        </Button>
        <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
