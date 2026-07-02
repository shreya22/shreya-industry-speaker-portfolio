import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DecorativeGraphic, LeafGraphic, PenGraphic } from "@/components/decorative-graphic";
import { teachingCards } from "@/lib/site-config";

export function Teaching() {
  return (
    <section
      id="teaching"
      className="bg-mesh-a relative scroll-mt-24 overflow-hidden border-t border-border/60 py-24 sm:py-28"
    >
      <DecorativeGraphic
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-80 text-brand/[0.07] lg:size-[26rem]"
      />
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute -left-8 bottom-6 hidden size-32 rotate-[-14deg] text-accent-warm/[0.1] sm:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute bottom-[-2rem] right-[24%] hidden size-24 rotate-[10deg] text-brand/[0.09] lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-brand">
            Teaching &amp; Mentoring
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Three ways I show up for students and engineers.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {teachingCards.map((card) => (
            <Card key={card.title} className="border-border/60 shadow-none">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal text-foreground">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-brand/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
