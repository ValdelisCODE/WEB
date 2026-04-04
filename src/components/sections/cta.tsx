import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BUSINESS_INFO } from "@/lib/constants";

export function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 px-6 py-20 text-center sm:px-16">
          {/* Decorative circles */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Fill Your Calendar With Qualified Leads?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Join hundreds of local businesses already growing with us. Your
              free consultation includes a custom growth plan — no strings attached.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#top">
                <Button
                  size="lg"
                  className="bg-white text-indigo-700 hover:bg-indigo-50 dark:bg-white dark:text-indigo-700 dark:hover:bg-indigo-50"
                >
                  Get My Free Growth Plan
                </Button>
              </a>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white dark:text-white dark:hover:bg-white/10"
                >
                  Call {BUSINESS_INFO.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
