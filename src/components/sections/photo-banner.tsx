import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { hasPublicFile } from "@/lib/files";

export function PhotoBanner() {
  const hasBannerPhoto = hasPublicFile("images/banner.jpg");

  return (
    <section className="border-t border-border/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
