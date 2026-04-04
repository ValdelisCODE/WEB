import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { LeadForm } from "@/components/lead-form";
import { BUSINESS_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white py-16 sm:py-24 dark:from-indigo-950/20 dark:to-zinc-950">
      {/* Decorative dots */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            <Badge className="mb-6 bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
              Trusted by 500+ Local Businesses
            </Badge>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Get More Customers{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Without the Guesswork
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We help local service businesses generate a steady stream of
              qualified leads through proven digital marketing strategies.
              More calls. More bookings. More revenue.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Results in 30 days</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Free consultation</span>
              </div>
            </div>

            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
              Or call us directly:{" "}
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                {BUSINESS_INFO.phone}
              </a>
            </p>
          </div>

          {/* Right — form */}
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}
