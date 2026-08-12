const values = [
    {
      number: "01",
      title: "Integrity",
      description:
        "We approach every engagement with professionalism, transparency, and a commitment to doing what is right.",
    },
    {
      number: "02",
      title: "Excellence",
      description:
        "We hold ourselves to a high standard and continuously seek better ways to deliver meaningful value.",
    },
    {
      number: "03",
      title: "Practicality",
      description:
        "We focus on solutions that can be understood, implemented, and sustained within real organizations.",
    },
    {
      number: "04",
      title: "Partnership",
      description:
        "We work alongside our clients, building relationships based on trust, collaboration, and shared objectives.",
    },
  ];
  
  export default function AboutValues() {
    return (
      <section className="bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Intro */}
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                What We Stand For
              </p>
  
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
                Principles that guide our work.
              </h2>
            </div>
  
            {/* Values */}
            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-white/15">
                {values.map((value) => (
                  <div
                    key={value.number}
                    className="
                      grid
                      gap-5
                      border-b
                      border-white/15
                      py-8
                      sm:grid-cols-12
                      sm:gap-6
                    "
                  >
                    <span className="text-xs font-bold text-primary sm:col-span-2">
                      {value.number}
                    </span>
  
                    <h3 className="text-xl font-bold tracking-tight sm:col-span-4">
                      {value.title}
                    </h3>
  
                    <p className="text-sm leading-6 text-white/45 sm:col-span-6">
                      {value.description}
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