import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Business Process Outsourcing",
    description:
      "Operational support that allows organizations to focus resources on their core priorities.",
    className: "md:col-span-7",
    dark: false,
  },
  {
    number: "02",
    title: "Consultancy",
    description:
      "Practical expertise for organizations navigating challenges, change, and new opportunities.",
    className: "md:col-span-5 md:mt-24",
    dark: true,
  },
  {
    number: "03",
    title: "Advisory",
    description:
      "Professional insight that helps leaders make clearer, more informed decisions.",
    className: "md:col-span-5 md:-mt-12",
    dark: false,
  },
  {
    number: "04",
    title: "Training & Professional Development",
    description:
      "Building stronger people and teams through relevant, practical professional development.",
    className: "md:col-span-7",
    dark: true,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {services.map((service) => (
            <Link
              key={service.number}
              href={`/services#${service.number}`}
              className={`
                group
                relative
                min-h-[360px]
                overflow-hidden
                p-7
                sm:min-h-[420px]
                sm:p-9
                md:p-10
                ${service.className}
                ${
                  service.dark
                    ? "bg-black text-white"
                    : "border border-black/10 bg-background text-black"
                }
              `}
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span
                  className={`text-xs font-bold ${
                    service.dark
                      ? "text-primary"
                      : "text-black/30"
                  }`}
                >
                  {service.number}
                </span>

                <div
                  className={`
                    flex h-11 w-11 items-center justify-center
                    rounded-full border
                    transition-all duration-300
                    ${
                      service.dark
                        ? "border-white/15 group-hover:border-primary group-hover:bg-primary group-hover:text-black"
                        : "border-black/10 group-hover:border-black group-hover:bg-black group-hover:text-white"
                    }
                  `}
                >
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Giant number */}
              <div
                className={`
                  absolute
                  right-5
                  top-12
                  text-[11rem]
                  font-black
                  leading-none
                  tracking-[-0.1em]
                  transition-transform
                  duration-500
                  group-hover:translate-x-3
                  ${
                    service.dark
                      ? "text-white/[0.035]"
                      : "text-black/[0.035]"
                  }
                `}
              >
                {service.number}
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-9 sm:right-9 md:left-10 md:right-10">
                <div
                  className={`mb-5 h-px w-12 ${
                    service.dark ? "bg-primary" : "bg-black"
                  }`}
                />

                <h2 className="max-w-xl text-3xl font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  {service.title}
                </h2>

                <p
                  className={`mt-5 max-w-md text-sm leading-6 ${
                    service.dark
                      ? "text-white/45"
                      : "text-black/50"
                  }`}
                >
                  {service.description}
                </p>

                <div className="mt-6 text-xs font-bold uppercase tracking-[0.15em]">
                  Explore service
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}