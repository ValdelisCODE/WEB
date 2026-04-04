import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <p className="text-7xl font-bold text-indigo-600 dark:text-indigo-400">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a href="/" className="mt-8">
        <Button>Back to Home</Button>
      </a>
    </Container>
  );
}
