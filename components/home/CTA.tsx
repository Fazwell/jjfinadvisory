import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
              Let's Work Together
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.05em] text-black sm:text-5xl md:text-6xl">
              Ready to move your organization forward?
            </h2>
          </div>

          <div className="md:col-span-4 md:flex md:justify-end">
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-black
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-white
                hover:text-black
              "
            >
              Talk to an Advisor

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}