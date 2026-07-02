import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { LeafGraphic, TreeGraphic } from "@/components/decorative-graphic";
import { hasPublicFile } from "@/lib/files";

export function PhotoBanner() {
  const hasBannerPhoto = hasPublicFile("images/banner.jpg");

  return (
    <section className="relative overflow-hidden border-t border-border/60 py-16 sm:py-20">
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-8 hidden size-24 rotate-[-14deg] text-brand/[0.08] sm:block"
      />
      <TreeGraphic
        aria-hidden
        className="pointer-events-none absolute -right-8 -bottom-10 hidden size-32 rotate-[4deg] text-accent-warm/[0.08] sm:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <PhotoPlaceholder
          hasImage={hasBannerPhoto}
          src="/images/banner.jpg"
          alt="Shreya Sahu speaking at an event"
          filenameHint="images/banner.jpg"
          className="aspect-[21/9] w-full rounded-3xl border border-border/60"
          imageClassName="grayscale-[15%]"
        />
      </div>
    </section>
  );
}
