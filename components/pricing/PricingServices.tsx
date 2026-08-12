const services = [
    {
      number: "01",
      service: "Business Process Outsourcing",
      model: "Retainer / Contract",
      description:
        "Ongoing operational support based on the processes, resources, and service levels required.",
    },
    {
      number: "02",
      service: "Consultancy",
      model: "Project Based",
      description:
        "Defined engagements scoped around a specific business challenge, assessment, or improvement initiative.",
    },
    {
      number: "03",
      service: "Advisory",
      model: "Engagement Based",
      description:
        "Flexible advisory arrangements designed around the level and duration of professional guidance required.",
    },
    {
      number: "04",
      service: "Training & Professional Development",
      model: "Per Program",
      description:
        "Programs priced according to participants, duration, content, customization, and delivery requirements.",
    },
  ];
  
  export default function PricingServices() {
    return (
      <section className="bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Service Models
              </span>
  
              <h2 className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                The right structure
                <br />
                for the work.
              </h2>
            </div>
          </div>
  
          <div className="border-t border-white/15">
            {services.map((service) => (
              <div
                key={service.number}
                className="
                  grid
                  grid-cols-12
                  gap-4
                  border-b
                  border-white/15
                  py-8
                  md:items-center
                "
              >
                <span className="col-span-2 text-xs font-bold text-primary md:col-span-1">
                  {service.number}
                </span>
  
                <h3 className="col-span-10 text-2xl font-bold tracking-tight md:col-span-4">
                  {service.service}
                </h3>
  
                <span className="col-span-6 text-xs font-bold uppercase tracking-[0.12em] text-white/35 md:col-span-3">
                  {service.model}
                </span>
  
                <p className="col-span-6 text-sm leading-6 text-white/45 md:col-span-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }