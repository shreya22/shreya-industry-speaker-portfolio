import { experience } from "@/lib/site-config";

export function Experience() {
  return (
    <section id="experience" className="bg-mesh-b relative scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
