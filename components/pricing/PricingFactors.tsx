const factors = [
    "Scope of work",
    "Engagement duration",
    "Number of participants or users",
    "Level of customization",
    "Operational complexity",
    "Resources required",
  ];
  
  export default function PricingFactors() {
    return (
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                What We Consider
              </span>
  
              <h2 className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                Your engagement
                <br />
                isn't one-size-fits-all.
              </h2>
  
              <p className="mt-6 max-w-md text-sm leading-7 text-black/50">
                We consider the specific requirements of each engagement so
                that the proposed fee reflects the work and value involved.
              </p>
            </div>
  
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="grid grid-cols-1 border-t border-black/10 sm:grid-cols-2">
                {factors.map((factor, index) => (
                  <div
                    key={factor}
                    className={`
                      flex
                      items-center
                      gap-4
                      border-b
                      border-black/10
                      py-5
                      ${
                        index % 2 === 0
                          ? "sm:border-r sm:pr-6"
                          : "sm:pl-6"
                      }
                    `}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
  
                    <span className="text-sm font-semibold text-black/70">
                      {factor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }