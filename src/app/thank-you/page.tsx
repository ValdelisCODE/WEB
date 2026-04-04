import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
        <svg
          className="h-8 w-8 text-green-600 dark:text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Thank You!
      </h1>
      <p className="mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        We&apos;ve received your request. A growth specialist will reach out
        within 24 hours to discuss your custom strategy.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a href="/">
          <Button variant="outline">Back to Home</Button>
        </a>
        <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}>
          <Button>Call Us Now: {BUSINESS_INFO.phone}</Button>
        </a>
      </div>
    </Container>
  );
}
