import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="border-t border-black/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden bg-primary px-7 py-12 sm:px-10 md:px-14 md:py-16">
          <div className="relative z-10 grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                Start a Conversation
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.05em] text-black sm:text-5xl">
                Let's explore what we can achieve together.
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
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-white
                  hover:text-black
                "
              >
                Contact J&J

                <ArrowUpRight
                  size={17}
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

          {/* Decorative element */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[24px] border-black/5" />
        </div>
      </div>
    </section>
  );
}