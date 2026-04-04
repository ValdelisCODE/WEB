"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { SERVICES } from "@/lib/constants";
import { useState, type FormEvent } from "react";

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400";

export function LeadForm({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.business.trim()) errs.business = "Business name is required";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", business: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  }

  if (status === "success") {
    return (
      <div className={cn("rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900 dark:bg-green-950", className)}>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-green-700 dark:text-green-300">
          We&apos;ve received your request. A growth specialist will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg sm:p-8 dark:border-zinc-800 dark:bg-zinc-900",
        className,
      )}
    >
      <h3 className="text-lg font-semibold">
        Get Your Free Growth Plan
      </h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        Fill out the form and we&apos;ll create a custom strategy for your business.
      </p>

      <div className={cn("mt-6 grid gap-4", compact ? "grid-cols-1" : "sm:grid-cols-2")}>
        <Field label="Full Name *" error={errors.name}>
          <input
            type="text"
            placeholder="John Smith"
            className={inputClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field label="Email *" error={errors.email}>
          <input
            type="email"
            placeholder="john@business.com"
            className={inputClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
        <Field label="Phone *" error={errors.phone}>
          <input
            type="tel"
            placeholder="(555) 123-4567"
            className={inputClass}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
        <Field label="Business Name *" error={errors.business}>
          <input
            type="text"
            placeholder="Smith's Plumbing"
            className={inputClass}
            value={form.business}
            onChange={(e) => update("business", e.target.value)}
          />
        </Field>
        <div className={compact ? "" : "sm:col-span-2"}>
          <Field label="Service Interested In">
            <select
              className={inputClass}
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
            >
              <option value="">Select a service...</option>
              {SERVICES.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Not sure">Not sure yet</option>
            </select>
          </Field>
        </div>
        {!compact && (
          <div className="sm:col-span-2">
            <Field label="Tell us about your goals">
              <textarea
                rows={3}
                placeholder="I'd like to get more customers for my..."
                className={cn(inputClass, "resize-none")}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </Field>
          </div>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Get My Free Consultation"}
      </Button>
      <p className="mt-3 text-center text-xs text-zinc-400 dark:text-zinc-500">
        No spam. No obligation. 100% free.
      </p>
    </form>
  );
}
