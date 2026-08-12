const reasons = [
    {
      number: "01",
      title: "Professional Expertise",
      description:
        "We bring structured thinking, professional knowledge, and practical insight to every engagement.",
    },
    {
      number: "02",
      title: "Practical Approach",
      description:
        "Our recommendations are designed to work in real organizational environments, not just on paper.",
    },
    {
      number: "03",
      title: "Client Focus",
      description:
        "We take the time to understand your objectives, challenges, and operating environment.",
    },
    {
      number: "04",
      title: "Sustainable Results",
      description:
        "We focus on solutions that create lasting value and strengthen your organization's capabilities.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Intro */}
            <div className="md:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Why J&J
              </p>
  
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
                Advice that leads to action.
              </h2>
  
              <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                We combine professional expertise with a practical
                understanding of the challenges organizations face.
              </p>
            </div>
  
            {/* Reasons */}
            <div className="md:col-span-7">
              <div className="border-t border-white/15">
                {reasons.map((reason) => (
                  <div
                    key={reason.number}
                    className="
                      grid
                      gap-4
                      border-b
                      border-white/15
                      py-7
                      sm:grid-cols-12
                      sm:gap-6
                    "
                  >
                    <span className="text-xs font-bold text-primary sm:col-span-2">
                      {reason.number}
                    </span>
  
                    <div className="sm:col-span-4">
                      <h3 className="font-bold text-white">
                        {reason.title}
                      </h3>
                    </div>
  
                    <p className="text-sm leading-6 text-white/45 sm:col-span-6">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }