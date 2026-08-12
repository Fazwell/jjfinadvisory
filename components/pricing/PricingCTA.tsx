import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
              Request a Proposal
            </span>

            <h2 className="mt-5 text-5xl font-extrabold leading-[0.9] tracking-[-0.06em] text-black sm:text-6xl md:text-7xl">
              Tell us what
              <br />
              you're working on.
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-black/55 md:text-base">
              Share your requirements with us and we'll discuss the
              appropriate engagement structure for your needs.
            </p>
          </div>

          <div className="col-span-12 flex items-end md:col-span-4 md:justify-end">
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
                font-bold
                text-white
                transition-all
                hover:bg-white
                hover:text-black
              "
            >
              Request a Proposal

              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}