import { Separator } from "@/components/ui/separator";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { LeafGraphic, PenGraphic, TreeGraphic, ScribbleGraphic } from "@/components/decorative-graphic";
import { hasPublicFile } from "@/lib/files";
import { withBasePath } from "@/lib/base-path";

const facts = [
  "Tech Lead at Monzo",
  "Previously Twitter, Amazon, Microsoft",
  "Dual B.Tech + M.Tech, Computer Science, IIIT Gwalior",
];

export function About() {
  const hasAboutPhoto = hasPublicFile("images/about.jpg");

  return (
    <section
      id="about"
      className="bg-mesh-b relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
    >
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-[6%] hidden size-48 rotate-[22deg] text-brand/[0.08] lg:block"
      />
      <TreeGraphic
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-6 hidden size-44 rotate-[6deg] text-accent-warm/[0.1] md:block"
      />
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute right-[22%] top-10 hidden size-20 rotate-[16deg] text-brand/[0.09] lg:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute bottom-[10%] left-[2%] hidden size-20 rotate-[-14deg] text-accent-warm/[0.1] sm:block"
      />
      <TreeGraphic
        aria-hidden
        className="pointer-events-none absolute -right-6 top-[42%] hidden size-32 rotate-[-2deg] text-brand/[0.07] xl:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute left-[30%] top-4 hidden size-14 rotate-[30deg] text-brand/[0.09] lg:block"
      />
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute bottom-6 right-[38%] hidden size-16 rotate-[-22deg] text-accent-warm/[0.08] xl:block"
      />
      <ScribbleGraphic
        aria-hidden
        className="pointer-events-none absolute left-[8%] bottom-4 hidden w-36 rotate-[4deg] text-accent-warm/[0.08] lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-wide text-brand">About</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              An engineer who thinks in systems, and explains them clearly.
            </h2>
            <PhotoPlaceholder
              hasImage={hasAboutPhoto}
              src={withBasePath("/images/about.jpg")}
              alt="Shreya Sahu"
              filenameHint="images/about.jpg"
              className="mt-10 hidden aspect-[4/5] w-full max-w-xs rounded-2xl border border-border/60 lg:flex"
            />
          </div>

          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Most of my week goes into the backend systems that Monzo runs
              on. Before that it was much the same story at Twitter, Amazon
              and Microsoft, writing, reviewing and occasionally arguing
              about software that has to hold up for millions of people,
              whether or not anyone happens to be watching.
            </p>
            <p>
              That work has shaped how I think about engineering leadership
              just as much as it has shaped how I write code: distributed
              systems, reliability and the kind of plain judgement that only
              comes from living with your decisions in production. I&apos;ve
              come to care as much about explaining that thinking clearly as
              I do about the thinking itself.
            </p>
            <p>
              I did a dual B.Tech and M.Tech in Computer Science at IIIT
              Gwalior. Outside work I enjoy speaking, writing and mentoring
              engineers. Whether it&apos;s a university lecture, a conference
              talk or a Toastmasters speech, I&apos;m interested in making
              complex ideas understandable.
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
