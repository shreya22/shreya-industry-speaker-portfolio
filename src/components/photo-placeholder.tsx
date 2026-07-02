import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  hasImage,
  src,
  alt,
  filenameHint,
  className,
  imageClassName,
}: {
  hasImage: boolean;
  src: string;
  alt: string;
  filenameHint: string;
  className?: string;
  imageClassName?: string;
}) {
  if (hasImage) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40rem, 90vw"
          className={cn("object-cover", imageClassName)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-border bg-[linear-gradient(155deg,color-mix(in_oklch,var(--brand)_14%,transparent),color-mix(in_oklch,var(--accent-warm)_16%,transparent))]",
        className,
      )}
    >
      <ImageIcon className="size-6 text-muted-foreground/50" aria-hidden />
      <p className="px-4 text-center text-xs text-muted-foreground/60">
        Add <code className="text-muted-foreground/80">public/{filenameHint}</code>
      </p>
    </div>
  );
}
