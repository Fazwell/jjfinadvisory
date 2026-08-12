export default function PricingHero() {
    return (
      <section className="bg-background pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-9">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
  
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                  J&J / Pricing
                </span>
              </div>
  
              <h1 className="mt-8 max-w-5xl text-6xl font-extrabold leading-[0.88] tracking-[-0.065em] text-black sm:text-7xl md:text-8xl">
                Value that makes
                <br />
                <span className="text-black/25">
                  business sense.
                </span>
              </h1>
            </div>
  
            <div className="col-span-12 flex items-end md:col-span-3">
              <p className="border-l border-black/10 pl-5 text-sm leading-7 text-black/55">
                Every organization is different. Our pricing is structured
                around the scope, complexity, duration, and requirements of
                each engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }