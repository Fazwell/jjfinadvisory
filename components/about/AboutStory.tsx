export default function AboutStory() {
    return (
      <section className="border-t border-black/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16">
            {/* Label */}
            <div className="md:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Who We Are
              </p>
            </div>
  
            {/* Content */}
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-black sm:text-4xl md:text-5xl">
                Professional insight with a practical point of view.
              </h2>
  
              <div className="mt-8 space-y-6 text-sm leading-7 text-black/55 md:text-base">
                <p>
                  J&J Fin Advisory works with organizations seeking to
                  strengthen their operations, make better decisions, and
                  develop the people and capabilities required for long-term
                  success.
                </p>
  
                <p>
                  Our work brings together business process outsourcing,
                  consultancy, advisory, and training to address both
                  immediate organizational needs and longer-term strategic
                  priorities.
                </p>
  
                <p>
                  We believe professional advice should be more than a
                  report or recommendation. It should provide clarity,
                  create direction, and ultimately help an organization
                  take meaningful action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }