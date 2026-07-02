import { ArrowUpRight } from "lucide-react";
import { LeafGraphic, ScribbleGraphic } from "@/components/decorative-graphic";
import { writingEssays } from "@/lib/site-config";

export function Writing() {
  return (
    <section
      id="writing"
      className="bg-mesh-a relative scroll-mt-24 overflow-hidden border-t border-border/60 py-24 sm:py-28"
    >
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-10 hidden size-36 rotate-[14deg] text-brand/[0.08] sm:block"
      />
      <ScribbleGraphic
        aria-hidden
        className="pointer-events-none absolute -left-4 bottom-8 hidden w-40 rotate-[-4deg] text-accent-warm/[0.08] lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-brand">Writing</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            The Longer Thought
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Alongside speaking, I write. The Longer Thought is where I work
            through systems thinking, incentives, second-order thinking and
            independent judgment, through essays grounded in everyday life
            rather than abstract theory.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {writingEssays.map((essay) => (
            <a
              key={essay.title}
              href={essay.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col rounded-2xl border border-border/60 bg-background p-7 transition-colors hover:bg-secondary/40"
            >
              <h3 className="font-serif text-lg leading-snug text-foreground">
                {essay.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {essay.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Read on The Longer Thought
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
