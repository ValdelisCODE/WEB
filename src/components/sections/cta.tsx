import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTA() {
  return (
    <section id="pricing" className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-20 text-center sm:px-16 dark:bg-zinc-800">
          {/* Decorative gradient */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(99,102,241,0.15),transparent)]" />

          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start building?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
            Join thousands of developers shipping faster with our platform. Get
            started in under 2 minutes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white dark:text-white dark:hover:bg-white/10"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
