import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig, inviteFormats, inviteFormatsKinds } from "@/lib/site-config";

export function Invite() {
  return (
    <section
      id="invite"
      className="bg-mesh-b relative scroll-mt-24 border-t border-border/60 bg-secondary/40 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.55fr_0.45fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-wide text-brand">Invite Me</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Looking for an industry speaker?
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              I&apos;m available for guest lectures, workshops, career talks,
              conference talks, engineering panels and fireside chats. In
              person across London, or remotely, wherever you are.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Formats
                </h3>
                <ul className="mt-4 space-y-2">
                  {inviteFormatsKinds.map((kind) => (
                    <li key={kind} className="text-sm text-foreground/90">
                      {kind}
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
