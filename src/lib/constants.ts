export const SITE_NAME = "LocalBoost";
export const SITE_DESCRIPTION =
  "We help local businesses get more customers through proven digital marketing, lead generation, and growth strategies. Get a free consultation today.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
] as const;

export const BUSINESS_INFO = {
  phone: "(555) 123-4567",
  email: "hello@localboost.com",
  address: "123 Main Street, Suite 200, Anytown, USA",
} as const;

export const SERVICES = [
  {
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    title: "Local SEO",
    description:
      "Dominate Google Maps and local search results. We optimize your online presence so customers find you first.",
  },
  {
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    title: "Google & Facebook Ads",
    description:
      "Targeted ad campaigns that reach your ideal customers right when they're searching for your services.",
  },
  {
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    title: "Website Design",
    description:
      "High-converting websites built to turn visitors into paying customers. Mobile-first, fast, and beautiful.",
  },
  {
    icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
    title: "Reputation Management",
    description:
      "Build a 5-star online reputation. We help you get more reviews and manage your brand across all platforms.",
  },
  {
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    title: "Analytics & Reporting",
    description:
      "Know exactly where your leads come from. Transparent monthly reports with real ROI metrics you can trust.",
  },
  {
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    title: "Email & SMS Marketing",
    description:
      "Nurture leads and bring back past customers with automated email and text message campaigns that convert.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell's Plumbing",
    quote:
      "Our phone hasn't stopped ringing since we started. We went from 5 leads a week to over 30. Absolutely game-changing for our business.",
    rating: 5,
  },
  {
    name: "David Chen",
    business: "Chen Family Dental",
    quote:
      "Within 3 months, we had to hire two new hygienists to keep up with demand. The ROI on this has been incredible.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    business: "Rodriguez Law Firm",
    quote:
      "We were skeptical at first, but the results speak for themselves. Our client acquisition cost dropped by 60% in just 6 months.",
    rating: 5,
  },
  {
    name: "James Thompson",
    business: "Thompson HVAC",
    quote:
      "Best marketing investment we've ever made. They actually understand local business and deliver real, measurable results.",
    rating: 5,
  },
] as const;

export const FAQS = [
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients start seeing increased leads within the first 30 days. Paid advertising campaigns can generate leads within 24-48 hours of launch, while SEO typically takes 60-90 days to show significant results.",
  },
  {
    question: "What's the minimum contract length?",
    answer:
      "We offer month-to-month plans with no long-term contracts. We believe in earning your business every month with results, not locking you in. Most clients stay because the ROI speaks for itself.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our plans start at $497/month depending on your market and goals. Every plan includes a dedicated account manager, monthly reporting, and a custom strategy. Book a free consultation to get a quote tailored to your business.",
  },
  {
    question: "Do you work with businesses in my industry?",
    answer:
      "We specialize in local service businesses including contractors, dental practices, law firms, restaurants, medical offices, auto repair shops, and more. If you serve local customers, we can help you grow.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "We focus exclusively on local businesses and measure everything by leads and revenue — not vanity metrics. You get a dedicated strategist, transparent reporting, and we don't do long-term contracts because our results keep clients around.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Absolutely. During your free consultation, we'll share case studies from businesses similar to yours, including specific lead numbers and ROI data. We're proud of our track record and happy to prove it.",
  },
] as const;

export const STATS = [
  { value: "500+", label: "Local Businesses Served" },
  { value: "2.4M+", label: "Leads Generated" },
  { value: "3.2x", label: "Average ROI" },
  { value: "97%", label: "Client Retention Rate" },
] as const;
