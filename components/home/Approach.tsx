import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your organization, objectives, challenges, and operating environment.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We assess the situation and develop a focused approach aligned with your priorities.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We turn recommendations into practical actions designed to create measurable value.",
  },
];

export default function Approach() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Our Approach
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-black sm:text-5xl">
            From insight to impact.
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/55 md:text-base">
            We believe effective advisory work starts with understanding
            the problem and ends with practical action.
          </p>
        </div>

        <div className="mt-14 grid gap-0 border-y border-black/10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`
                relative
                py-9
                md:px-8
                md:py-12
                ${
                  index !== steps.length - 1
                    ? "border-b border-black/10 md:border-b-0 md:border-r"
                    : ""
                }
              `}
            >
              <span className="text-xs font-bold text-black/30">
                {step.number}
              </span>

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-black">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-black/50">
                {step.description}
              </p>

              {index !== steps.length - 1 && (
                <ArrowRight
                  size={18}
                  className="absolute right-7 top-1/2 hidden -translate-y-1/2 text-primary md:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}