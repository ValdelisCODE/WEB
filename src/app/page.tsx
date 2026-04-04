import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Results />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  );
}
