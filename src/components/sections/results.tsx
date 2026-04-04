import { Container } from "@/components/ui/container";
import { STATS } from "@/lib/constants";

export function Results() {
  return (
    <section
      id="results"
      className="border-y border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Proven Results
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Numbers That Speak for Themselves
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            We don&apos;t just promise results — we deliver them. Here&apos;s what
            we&apos;ve achieved for local businesses like yours.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
