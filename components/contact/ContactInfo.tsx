import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
];

export default function ContactInfo() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
        Get in touch
      </p>

      <div className="mt-8 space-y-7">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-start gap-4"
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  text-black
                "
              >
                <Icon size={18} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/40">
                  {item.label}
                </p>

                <p className="mt-1 text-sm font-medium text-black transition-colors group-hover:text-black/60">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}

        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-primary
              text-black
            "
          >
            <MapPin size={18} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/40">
              Location
            </p>

            <p className="mt-1 text-sm font-medium text-black">
              {siteConfig.contact.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-black/10 pt-8">
        <p className="text-sm font-semibold text-black">
          Have a specific requirement?
        </p>

        <p className="mt-2 max-w-sm text-sm leading-6 text-black/55">
          Tell us what you're looking to achieve and we'll get back to
          you to discuss the next steps.
        </p>
      </div>
    </div>
  );
}