import { experience } from "@/lib/site-config";
import { LeafGraphic } from "@/components/decorative-graphic";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/60 py-16 sm:py-20"
    >
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute -right-6 top-6 hidden size-20 rotate-[12deg] text-brand/[0.06] lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-brand">Experience</p>
          <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
            A brief record.
          </h2>
        </div>

        <dl className="mt-10 max-w-2xl divide-y divide-border/60">
          {experience.map((job) => (
            <div
              key={job.company}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="flex items-baseline gap-2">
                <dt className="font-serif text-base text-foreground">{job.company}</dt>
                <span className="text-sm text-muted-foreground">{job.role}</span>
              </div>
              <dd className="text-sm text-muted-foreground sm:text-right">{job.focus}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
