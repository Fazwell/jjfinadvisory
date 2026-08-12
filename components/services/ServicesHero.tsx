export default function ServicesHero() {
    return (
      <section className="bg-background pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-9">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
  
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                  J&J Fin Advisory / Services
                </span>
              </div>
  
              <h1 className="mt-8 max-w-5xl text-6xl font-extrabold leading-[0.88] tracking-[-0.065em] text-black sm:text-7xl md:text-8xl">
                Expertise
                <br />
                that moves
                <br />
                <span className="text-black/25">business.</span>
              </h1>
            </div>
  
            <div className="col-span-12 flex items-end md:col-span-3">
              <div className="border-l border-black/10 pl-5">
                <p className="text-sm leading-6 text-black/55">
                  Four areas of expertise designed to help organizations
                  operate better, make informed decisions, and develop
                  stronger capabilities.
                </p>
              </div>
            </div>
          </div>
  
          <div className="mt-16 flex items-center justify-between border-t border-black/10 pt-5">
            <span className="text-xs font-bold text-black/30">
              01 — 04
            </span>
  
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-black/30">
              Explore our capabilities
            </span>
          </div>
        </div>
      </section>
    );
  }