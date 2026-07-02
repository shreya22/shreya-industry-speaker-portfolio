import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { PenGraphic, LeafGraphic, TreeGraphic, ScribbleGraphic } from "@/components/decorative-graphic";
import { siteConfig, inviteFormats, inviteAudiences } from "@/lib/site-config";

export function Invite() {
  return (
    <section
      id="invite"
      className="bg-mesh-b relative scroll-mt-24 overflow-hidden border-t border-border/60 bg-secondary/40 py-24 sm:py-28"
    >
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute -right-6 top-10 hidden size-32 rotate-[-10deg] text-brand/[0.1] lg:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute -left-8 bottom-0 hidden size-40 rotate-[-16deg] text-accent-warm/[0.09] sm:block"
      />
      <TreeGraphic
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-[18%] hidden size-40 rotate-[3deg] text-brand/[0.08] lg:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute right-[36%] top-6 hidden size-16 rotate-[18deg] text-brand/[0.08] xl:block"
      />
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute left-[10%] top-[52%] hidden size-16 rotate-[26deg] text-accent-warm/[0.08] xl:block"
      />
      <ScribbleGraphic
        aria-hidden
        className="pointer-events-none absolute right-[6%] bottom-4 hidden w-32 rotate-[8deg] text-brand/[0.08] lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.55fr_0.45fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-wide text-brand">Invite Me to Speak</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Looking for an industry speaker?
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              I&apos;m available for conference talks, guest lectures,
              workshops, panels and fireside chats. In person across London,
              or remotely, wherever you are.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Audiences
                </h3>
                <ul className="mt-4 space-y-2">
                  {inviteAudiences.map((audience) => (
                    <li key={audience} className="text-sm text-foreground/90">
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Typical Length
                </h3>
                <ul className="mt-4 space-y-2">
                  {inviteFormats.map((format) => (
                    <li key={format} className="text-sm text-foreground/90">
                      {format}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background p-8">
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden />
              London &middot; Available remotely worldwide
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full rounded-full"
                render={<a href={`mailto:${siteConfig.email}?subject=Speaking%20invitation`} />}
              >
                <Mail className="size-4" />
                Email {siteConfig.name.split(" ")[0]}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full"
                render={
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer noopener" />
                }
              >
                <LinkedinIcon className="size-4" />
                Message on LinkedIn
              </Button>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Include your institution or event, the format you have in mind
              and a few possible dates. I usually reply within a few days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
