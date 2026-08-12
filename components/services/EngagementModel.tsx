const steps = [
    {
      number: "01",
      title: "Understand",
      text: "We listen, assess, and establish what matters most.",
    },
    {
      number: "02",
      title: "Define",
      text: "We identify priorities and develop a focused direction.",
    },
    {
      number: "03",
      title: "Deliver",
      text: "We turn the agreed approach into practical action.",
    },
  ];
  
  export default function EngagementModel() {
    return (
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Our Approach
              </span>
  
              <h2 className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] text-black sm:text-5xl">
                From challenge
                <br />
                to action.
              </h2>
            </div>
  
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`
                    grid grid-cols-12 gap-4 py-8
                    ${
                      index !== 0
                        ? "border-t border-black/10"
                        : "border-t border-black/10"
                    }
                  `}
                >
                  <span className="col-span-2 text-xs font-bold text-primary">
                    {step.number}
                  </span>
  
                  <h3 className="col-span-4 text-xl font-bold tracking-tight text-black">
                    {step.title}
                  </h3>
  
                  <p className="col-span-6 text-sm leading-6 text-black/50">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }