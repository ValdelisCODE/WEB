"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { useState, type FormEvent } from "react";

interface SiteData {
  id: string;
  slug: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  heroTitle: string;
  heroText: string;
  services: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100";

export function TenantSite({ site }: { site: SiteData }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.business.trim()) errs.business = "Required";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch(`/api/sites/${site.slug}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/90">
        <Container className="flex h-16 items-center justify-between">
          <span className="text-lg font-bold">{site.name}</span>
          {site.phone && (
            <a href={`tel:${site.phone.replace(/\D/g, "")}`}>
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700">
                {site.phone}
              </Button>
            </a>
          )}
        </Container>
      </header>

      {/* Hero + Form */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white py-16 sm:py-24 dark:from-indigo-950/20 dark:to-zinc-950">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {site.heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                {site.heroText}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {["Free consultation", "No obligation", "Fast response"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Form */}
            {status === "success" ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900 dark:bg-green-950">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">Thank you!</h3>
                <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold">Get a Free Quote</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "name", label: "Full Name *", placeholder: "John Smith", type: "text" },
                    { name: "email", label: "Email *", placeholder: "john@email.com", type: "email" },
                    { name: "phone", label: "Phone *", placeholder: "(555) 123-4567", type: "tel" },
                    { name: "business", label: "Business/Project *", placeholder: "My project", type: "text" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="mb-1.5 block text-sm font-medium">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className={cn(inputClass, errors[field.name] && "border-red-400")}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => update(field.name, e.target.value)}
                      />
                      {errors[field.name] && (
                        <p className="mt-1 text-xs text-red-600">{errors[field.name]}</p>
                      )}
                    </div>
                  ))}
                  {site.services.length > 0 && (
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium">Service</label>
                      <select className={inputClass} value={form.service} onChange={(e) => update("service", e.target.value)}>
                        <option value="">Select a service...</option>
                        {site.services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your needs..."
                      className={cn(inputClass, "resize-none")}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                    />
                  </div>
                </div>
                {status === "error" && (
                  <p className="mt-4 text-sm text-red-600">Something went wrong. Please try again.</p>
                )}
                <Button
                  type="submit"
                  size="lg"
                  className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Get My Free Quote"}
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* Services */}
      {site.services.length > 0 && (
        <section className="py-24">
          <Container>
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {site.services.map((service) => (
                <div key={service.id} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950">
                    <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{service.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-900 py-8 text-zinc-400 dark:border-zinc-800 dark:bg-black">
        <Container className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          {site.address && <p className="mt-1">{site.address}</p>}
        </Container>
      </footer>
    </div>
  );
}
