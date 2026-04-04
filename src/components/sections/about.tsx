import { Container } from "@/components/ui/container";

const STATS = [
  { value: "10k+", label: "Developers" },
  { value: "99.9%", label: "Uptime" },
  { value: "<50ms", label: "Avg Response" },
  { value: "24/7", label: "Support" },
];

export function About() {
  return (
    <section id="about" className="border-t border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-950">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            From solo hackers to enterprise teams, we power the apps people use
            every day.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
