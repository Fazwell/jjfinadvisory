import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="border-t border-black/10 bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Start a conversation
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-7xl">
              Have a challenge?
              <br />
              Let's talk.
            </h2>
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
                bg-primary
                px-7
                py-4
                text-sm
                font-bold
                text-black
                transition-all
                hover:bg-white
              "
            >
              Contact J&J

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