"use client";

import { Container } from "@/components/ui/container";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useState } from "react";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-medium">{question}</span>
        <svg
          className={cn(
            "h-5 w-5 shrink-0 text-zinc-500 transition-transform",
            open && "rotate-180",
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all",
          open ? "max-h-96 pb-5" : "max-h-0",
        )}
      >
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-t border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-950">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Common Questions
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {FAQS.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
