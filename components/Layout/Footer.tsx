import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <span className="text-2xl font-extrabold tracking-[-0.05em]">
                {siteConfig.shortName}
              </span>

              <span className="h-6 w-px bg-white/30" />

              <span className="text-sm font-semibold tracking-tight text-white/80">
                FIN ADVISORY
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              {siteConfig.description}
            </p>

            <Link
              href={navigationConfig.cta.href}
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary
                px-5
                py-3
                text-sm
                font-semibold
                text-black
                transition-colors
                hover:bg-white
              "
            >
              {navigationConfig.cta.label}

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Navigation
            </h3>

            <nav className="mt-5 flex flex-col gap-4">
              {navigationConfig.footer.company.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    w-fit
                    text-sm
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-5">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-primary"
                />

                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-primary"
                />

                <span>{siteConfig.contact.phone}</span>
              </a>

              <p className="text-sm text-white/50">
                {siteConfig.contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-6
            text-xs
            text-white/40
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href={siteConfig.navigation.privacy}
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href={siteConfig.navigation.terms}
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}