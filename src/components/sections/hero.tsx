import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeafGraphic, PenGraphic, TreeGraphic, ScribbleGraphic } from "@/components/decorative-graphic";
import { siteConfig } from "@/lib/site-config";
import { hasPublicFile } from "@/lib/files";

export function Hero() {
  const hasHeadshot = hasPublicFile("images/headshot.jpg");

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[36rem] bg-[radial-gradient(55%_60%_at_20%_0%,color-mix(in_oklch,var(--brand)_16%,transparent),transparent_70%),radial-gradient(45%_50%_at_90%_10%,color-mix(in_oklch,var(--accent-warm)_18%,transparent),transparent_70%)]"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute -left-6 top-8 hidden size-40 rotate-[-18deg] text-brand/[0.09] sm:block lg:size-56"
      />
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-4 hidden size-24 rotate-[24deg] text-accent-warm/[0.16] lg:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[38%] hidden size-24 rotate-[12deg] text-brand/[0.1] md:block"
      />
      <TreeGraphic
        aria-hidden
        className="pointer-events-none absolute -right-8 bottom-[-2rem] hidden size-48 rotate-[-4deg] text-brand/[0.1] sm:block lg:size-64"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute left-[16%] top-[46%] hidden size-16 rotate-[40deg] text-accent-warm/[0.12] lg:block"
      />
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute left-[52%] top-[6%] hidden size-16 rotate-[-30deg] text-brand/[0.08] xl:block"
      />
      <TreeGraphic
        aria-hidden
        className="pointer-events-none absolute -left-4 bottom-[-3rem] hidden size-32 rotate-[8deg] text-accent-warm/[0.09] md:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute right-[26%] bottom-[6%] hidden size-14 rotate-[-24deg] text-brand/[0.1] sm:block"
      />
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute right-[2%] top-[38%] hidden size-20 rotate-[60deg] text-accent-warm/[0.08] xl:block"
      />
      <PenGraphic
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[64%] hidden size-14 rotate-[10deg] text-brand/[0.07] xl:block"
      />
      <ScribbleGraphic
        aria-hidden
        className="pointer-events-none absolute right-[10%] bottom-[18%] hidden w-40 rotate-[-6deg] text-brand/[0.09] md:block"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-brand">
            Tech Lead, Monzo &middot; Guest Lecturer &amp; Speaker
          </p>

          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Building software is my profession. Teaching it is my passion.
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            I&apos;m a Tech Lead at Monzo with previous experience at Twitter,
            Amazon and Microsoft. I enjoy helping students and early-career
            engineers bridge the gap between computer science theory and
            real-world software engineering through guest lectures, workshops
            and mentoring.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full px-7" render={<a href="#invite" />}>
              Invite Me to Speak
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-7"
              render={<a href={siteConfig.resumeHref} download />}
            >
              <Download className="size-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 bg-secondary shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            {hasHeadshot ? (
              <Image
                src={siteConfig.headshotSrc}
                alt={siteConfig.name}
                fill
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,color-mix(in_oklch,var(--brand)_16%,transparent),transparent_65%)]">
                <span className="font-serif text-6xl text-brand/70">SS</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
