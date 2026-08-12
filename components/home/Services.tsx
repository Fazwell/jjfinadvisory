import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/config/services";

export default function Services() {
  return (
    <section className="border-t border-black/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-black sm:text-5xl">
              Expertise built around your needs.
            </h2>
          </div>

          <div className="md:col-span-5">
            <p className="text-sm leading-7 text-black/55 md:text-base">
              From operational support to strategic guidance, we provide
              professional services designed to help organizations
              perform better and move forward with confidence.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-14 border-t border-black/10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                href={service.href}
                className="
                  group
                  grid
                  gap-6
                  border-b
                  border-black/10
                  py-8
                  transition-colors
                  hover:bg-background
                  md:grid-cols-12
                  md:items-center
                  md:px-5
                "
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-xs font-bold text-black/30">
                    {service.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="hidden md:col-span-1 md:block">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    className="text-black/50 transition-colors group-hover:text-primary"
                  />
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold tracking-tight text-black md:text-2xl">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="max-w-xl text-sm leading-6 text-black/50">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 md:flex md:justify-end">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      text-black
                      transition-all
                      group-hover:border-primary
                      group-hover:bg-primary
                    "
                  >
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All */}
        <div className="mt-8">
          <Link
            href="/services"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-black
              transition-colors
              hover:text-black/50
            "
          >
            View all services
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}