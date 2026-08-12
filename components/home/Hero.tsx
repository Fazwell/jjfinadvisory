import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-16 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                J&J Fin Advisory
              </p>
            </div>

            <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-black sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Strategic expertise.
              <br />
              <span className="text-black/35">
                Practical solutions.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/60 md:text-lg md:leading-8">
              J&J Fin Advisory helps organizations improve operations,
              make informed decisions, and develop the capabilities
              needed for sustainable growth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-black
                  transition-colors
                  hover:bg-black
                  hover:text-white
                "
              >
                Get Started

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-black/15
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-black
                  transition-colors
                  hover:border-black
                "
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:col-span-4 lg:block">
            <div className="relative ml-auto aspect-square max-w-sm">
              {/* Outer Frame */}
              <div className="absolute inset-0 border border-black/10" />

              {/* Accent Block */}
              <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-primary" />

              {/* Number */}
              <div className="absolute bottom-0 left-0 flex h-1/2 w-1/2 items-end bg-black p-7">
                <span className="text-7xl font-extrabold tracking-[-0.06em] text-white">
                  01
                </span>
              </div>

              {/* Label */}
              <div className="absolute bottom-7 right-7 text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                  Professional
                </p>

                <p className="mt-1 text-sm font-bold text-black">
                  Advisory
                </p>
              </div>

              {/* Center Line */}
              <div className="absolute left-1/2 top-0 h-full w-px bg-black/10" />

              <div className="absolute left-0 top-1/2 h-px w-full bg-black/10" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex items-center gap-3 text-black/40 lg:mt-0">
          <ArrowDownRight size={16} />

          <span className="text-xs font-semibold uppercase tracking-[0.16em]">
            Explore
          </span>
        </div>
      </div>
    </section>
  );
}