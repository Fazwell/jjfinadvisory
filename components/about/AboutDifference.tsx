import { ArrowUpRight } from "lucide-react";

const points = [
  {
    number: "01",
    title: "We listen before we advise.",
    description:
      "Every organization operates within a unique environment. Understanding that environment is the foundation of useful advice.",
  },
  {
    number: "02",
    title: "We connect strategy with execution.",
    description:
      "Good strategy only matters when it can be translated into practical decisions, processes, and actions.",
  },
  {
    number: "03",
    title: "We build capability, not dependency.",
    description:
      "Our goal is to leave clients stronger by helping develop the systems, knowledge, and people required for continued progress.",
  },
];

export default function AboutDifference() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The J&J Difference
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.045em] text-black sm:text-5xl">
              Advice should create momentum.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-black/55 md:text-base">
              Our approach is built around understanding, clarity, and
              practical execution. We aim to make complex challenges
              easier to navigate and meaningful opportunities easier to
              pursue.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="border-t border-black/10">
              {points.map((point) => (
                <div
                  key={point.number}
                  className="
                    group
                    grid
                    gap-6
                    border-b
                    border-black/10
                    py-8
                    sm:grid-cols-12
                    sm:items-start
                  "
                >
                  <span className="text-xs font-bold text-black/30 sm:col-span-2">
                    {point.number}
                  </span>

                  <div className="sm:col-span-9">
                    <h3 className="text-xl font-bold tracking-tight text-black md:text-2xl">
                      {point.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
                      {point.description}
                    </p>
                  </div>

                  <div className="hidden sm:col-span-1 sm:flex sm:justify-end">
                    <ArrowUpRight
                      size={18}
                      className="
                        text-black/20
                        transition-all
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-primary
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}