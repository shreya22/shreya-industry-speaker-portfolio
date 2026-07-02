import { Separator } from "@/components/ui/separator";

const facts = [
  "Tech Lead at Monzo",
  "Previously Twitter, Amazon, Microsoft",
  "Dual B.Tech + M.Tech, Computer Science, IIIT Gwalior",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-wide text-brand">About</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              An engineer who thinks in systems, and teaches the same way.
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I spend my days building the backend systems that Monzo runs
              on, and the years before that were spent doing much the same at
              Twitter, Amazon and Microsoft &mdash; writing, reviewing and
              rethinking software that has to work for millions of people
              whether or not anyone is watching.
            </p>
            <p>
              That work taught me more about distributed systems, reliability
              and engineering judgement than any classroom could. It also
              left me with a strong sense of what&apos;s missing between what
              students learn in a computer science degree and what it
              actually takes to build and operate software at scale &mdash;
              which is the gap I try to close when I lecture, run workshops
              or mentor engineers.
            </p>
            <p>
              I hold a dual B.Tech and M.Tech in Computer Science from IIIT
              Gwalior, and I care about engineering leadership and education
              as seriously as I care about the systems themselves. I think
              the best engineers are the ones who can also explain their
              reasoning clearly &mdash; and I try to model that, both at work
              and in the room.
            </p>
          </div>
        </div>

        <Separator className="mt-16" />

        <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact} className="border-l-2 border-brand/30 pl-4">
              <dd className="text-base text-foreground">{fact}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
