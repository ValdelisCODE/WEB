export const SITE_NAME = "WebApp";
export const SITE_DESCRIPTION =
  "A modern full-stack web application built with Next.js, TypeScript, and TailwindCSS.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
] as const;
