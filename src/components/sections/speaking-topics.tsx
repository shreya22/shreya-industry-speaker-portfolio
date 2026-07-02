import { speakingTopics } from "@/lib/site-config";

export function SpeakingTopics() {
  return (
    <section id="speaking" className="bg-mesh-b relative scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-brand">Speaking Topics</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Talks drawn from a decade of building production software.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {speakingTopics.map((topic) => (
            <div
              key={topic.title}
              className="group bg-background p-7 transition-colors hover:bg-secondary/60"
            >
              <h3 className="font-serif text-lg leading-snug text-foreground">
                {topic.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
