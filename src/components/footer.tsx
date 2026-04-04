import { Container } from "@/components/ui/container";
import { SITE_NAME, NAV_LINKS, BUSINESS_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-400 dark:border-zinc-800 dark:bg-black">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                LB
              </div>
              <span className="text-lg font-bold text-white">{SITE_NAME}</span>
            </div>
            <p className="mt-4 text-sm leading-6">
              Helping local businesses grow with proven digital marketing
              strategies that deliver real, measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <nav className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                className="transition-colors hover:text-white"
              >
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="transition-colors hover:text-white"
              >
                {BUSINESS_INFO.email}
              </a>
              <p>{BUSINESS_INFO.address}</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white">Hours</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <p>Mon - Fri: 8am - 6pm</p>
              <p>Saturday: 9am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
