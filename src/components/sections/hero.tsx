import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(120,119,198,0.08),transparent)] dark:bg-[radial-gradient(45%_40%_at_50%_60%,rgba(120,119,198,0.15),transparent)]" />

      <Container className="flex flex-col items-center text-center">
        <Badge className="mb-6">Now in Beta</Badge>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Build faster.{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Ship smarter.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          The modern full-stack platform for building, deploying, and scaling
          your web applications. From idea to production in minutes, not months.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg">Start Building Free</Button>
          <Button size="lg" variant="outline">
            View Demo
          </Button>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          No credit card required &middot; Free tier available
        </p>
      </Container>
    </section>
  );
}
