export default function AboutHero() {
    return (
      <section className="bg-background pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-9">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
  
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                  About J&J
                </p>
              </div>
  
              <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-black sm:text-6xl md:text-7xl">
                Helping organizations
                <br />
                <span className="text-black/35">
                  move with confidence.
                </span>
              </h1>
            </div>
  
            <div className="md:col-span-3">
              <p className="text-sm leading-7 text-black/55 md:text-base">
                J&J Fin Advisory is a professional services firm providing
                practical expertise across business operations, advisory,
                consultancy, and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }