import { experience } from "@/lib/site-config";
import { TreeGraphic, LeafGraphic, PenGraphic, ScribbleGraphic } from "@/components/decorative-graphic";

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-mesh-b relative scroll-mt-24 overflow-hidden border-t border-border/60 py-24 sm:py-28"
    >
      <TreeGraphic
        aria-hidden
        className="pointer-events-none absolute -right-10 -bottom-10 hidden size-48 rotate-[-3deg] text-brand/[0.08] sm:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute -left-6 top-6 hidden size-28 rotate-[16deg] text-accent-warm/[0.09] lg:block"
      />
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute right-[34%] top-4 hidden size-14 rotate-[-16deg] text-accent-warm/[0.08] xl:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute left-[42%] bottom-2 hidden size-16 rotate-[24deg] text-brand/[0.07] xl:block"
      />
      <ScribbleGraphic
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[8%] hidden w-32 rotate-[5deg] text-brand/[0.07] lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-brand">Experience</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Where the material for my talks comes from.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {experience.map((job) => (
            <div
              key={job.company}
              className="flex items-start justify-between gap-6 rounded-2xl border border-border/60 p-8"
            >
              <div>
                <h3 className="font-serif text-xl text-foreground">{job.company}</h3>
                <p className="mt-1 text-sm text-brand">{job.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {job.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
