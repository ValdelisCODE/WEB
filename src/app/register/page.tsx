"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { register } from "@/lib/actions";
import { useActionState } from "react";

export default function RegisterPage() {
  const [state, action, pending] = useActionState(register, {});

  return (
    <Container className="flex flex-1 items-center justify-center py-16">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
            LB
          </div>
          <h1 className="mt-4 text-2xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Start generating leads in minutes
          </p>
        </div>

        <form action={action} className="mt-8 space-y-4">
          {state.error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
              {state.error}
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-sm font-medium">Full Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Password{" "}
              <span className="font-normal text-zinc-400">(min 8 characters)</span>
            </label>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800"
              placeholder="********"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700"
            disabled={pending}
          >
            {pending ? "Creating account..." : "Create Account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-indigo-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </Container>
  );
}
