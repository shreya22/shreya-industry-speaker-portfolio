import { DecorativeGraphic, TreeGraphic, LeafGraphic, PenGraphic, ScribbleGraphic } from "@/components/decorative-graphic";
import { communityCards } from "@/lib/site-config";

export function Community() {
  return (
    <section
      id="community"
      className="bg-mesh-a relative scroll-mt-24 overflow-hidden border-t border-border/60 py-24 sm:py-28"
    >
      <DecorativeGraphic
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-16 size-80 rotate-180 text-accent-warm/[0.14] lg:size-[26rem]"
      />
      <TreeGraphic
        aria-hidden
        className="pointer-events-none absolute -right-10 top-4 hidden size-40 rotate-[4deg] text-brand/[0.09] sm:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute right-[16%] bottom-8 hidden size-20 rotate-[-20deg] text-accent-warm/[0.1] lg:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute left-[36%] -bottom-6 hidden size-16 rotate-[16deg] text-brand/[0.08] md:block"
      />
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[54%] hidden size-16 rotate-[-30deg] text-brand/[0.07] xl:block"
      />
      <ScribbleGraphic
        aria-hidden
        className="pointer-events-none absolute left-[10%] top-6 hidden w-36 rotate-[-3deg] text-accent-warm/[0.07] lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-brand">
            Speaking &amp; Community
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Practising the craft of communication outside of work, too.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1">
          {communityCards.map((card) => (
            <div
              key={card.title}
              className="max-w-2xl rounded-2xl border border-border/60 p-8"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {card.subtitle}
              </p>
              <h3 className="mt-2 font-serif text-xl text-foreground">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
