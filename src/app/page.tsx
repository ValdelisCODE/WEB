import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const FEATURES = [
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Launch in Minutes",
    description: "Create a high-converting lead generation site for any local business in under 5 minutes. No coding required.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Capture Every Lead",
    description: "Smart forms with validation, instant notifications, and a dashboard to manage all your leads in one place.",
  },
  {
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    title: "Track Performance",
    description: "See exactly how many leads each site generates. Filter by status, date, and source. Export anytime.",
  },
  {
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    title: "Customize Everything",
    description: "Edit headlines, services, contact info, and more from your dashboard. Each site gets its own unique URL.",
  },
  {
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    title: "Built to Convert",
    description: "Every template is designed with conversion psychology — trust signals, urgency, social proof, and clear CTAs.",
  },
  {
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
    title: "Monetize Instantly",
    description: "Charge clients per site, sell leads, or rent ranked pages. Multiple revenue streams from day one.",
  },
];

const PRICING = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying things out",
    features: ["1 lead gen site", "Unlimited leads", "Basic analytics", "LocalBoost branding"],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For agencies and freelancers",
    features: ["10 lead gen sites", "Unlimited leads", "Advanced analytics", "No branding", "Priority support", "Custom domains"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$149",
    period: "/month",
    description: "For teams and agencies at scale",
    features: ["Unlimited sites", "Unlimited leads", "White-label", "API access", "Team accounts", "Dedicated support"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/90">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              LB
            </div>
            <span className="text-lg font-bold">LocalBoost</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Features</a>
            <a href="#pricing" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Pricing</a>
            <a href="/login" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">Log In</a>
            <a href="/register">
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700">
                Start Free
              </Button>
            </a>
          </nav>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(99,102,241,0.08),transparent)]" />
        <Container className="text-center">
          <Badge className="mb-6 bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
            Launch Your Lead Gen Business Today
          </Badge>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Turn Any Local Business Into a{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Lead Machine
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Create beautiful, high-converting lead generation websites for local
            businesses. Manage leads, track performance, and scale your agency —
            all from one dashboard.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/register">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700">
                Create Your First Site Free
              </Button>
            </a>
            <a href="#features">
              <Button size="lg" variant="outline">See How It Works</Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-zinc-500">No credit card required</p>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-950">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Run a Lead Gen Agency
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              From site creation to lead management — we handle the tech so you can
              focus on closing deals.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950">
                  <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Start free, upgrade when you&apos;re ready.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600 dark:border-indigo-500 dark:bg-indigo-950 dark:ring-indigo-500"
                    : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                }`}
              >
                {plan.highlighted && (
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Most Popular
                  </p>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-zinc-500">{plan.period}</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/register" className="mt-8 block">
                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700"
                        : ""
                    }`}
                    variant={plan.highlighted ? "primary" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 px-6 py-20 text-center sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Building Your Lead Gen Empire
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Create your free account and launch your first site in under 5
              minutes. No credit card needed.
            </p>
            <a href="/register" className="mt-10 inline-block">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 dark:bg-white dark:text-indigo-700 dark:hover:bg-indigo-50">
                Get Started Free
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-900 py-8 text-zinc-400 dark:border-zinc-800 dark:bg-black">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-xs font-bold text-white">
              LB
            </div>
            <span className="text-sm font-semibold text-white">LocalBoost</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} LocalBoost. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}
