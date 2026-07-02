import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-config";

export function Testimonials() {
  return (
    <section className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-brand">Testimonials</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            What colleagues, mentees and organisers say.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-dashed border-border p-8"
            >
              <Quote className="size-5 text-muted-foreground/40" aria-hidden />
              <p className="mt-5 text-base italic leading-relaxed text-muted-foreground/70">
                Testimonial coming soon.
              </p>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground/60">Name, Role</p>
                <p className="text-sm text-muted-foreground/60">Organisation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
