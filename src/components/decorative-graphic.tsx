import type { SVGProps } from "react";

/**
 * Abstract node-and-line graphic, evokes systems/network thinking without
 * resorting to literal code snippets or brackets. Colours follow currentColor
 * so it can be tinted per section via text-* utility classes.
 */
export function DecorativeGraphic(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.55">
        <path d="M40 320 L140 230 L150 90" />
        <path d="M140 230 L260 260 L340 150" />
        <path d="M260 260 L300 380" />
        <path d="M150 90 L260 40" />
        <path d="M150 90 L340 150" />
        <path d="M340 150 L390 260" />
      </g>
      <g fill="currentColor">
        <circle cx="40" cy="320" r="5" />
        <circle cx="140" cy="230" r="7" />
        <circle cx="150" cy="90" r="4" />
        <circle cx="260" cy="260" r="5" />
        <circle cx="340" cy="150" r="8" />
        <circle cx="300" cy="380" r="4" />
        <circle cx="260" cy="40" r="4" />
        <circle cx="390" cy="260" r="4" />
      </g>
    </svg>
  );
}

/**
 * Single line-art leaf, a soft nod to the site's green palette. Outline only,
 * no fill, so it reads as a sketch rather than a sticker.
 */
export function LeafGraphic(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M50 8C74 26 86 54 78 84C71 110 54 128 50 132C46 128 29 110 22 84C14 54 26 26 50 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M50 20V122"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M50 48C43 52 36 56 30 56M50 76C42 80 34 83 27 83M50 100C43 104 37 107 31 108"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M50 48C57 52 64 56 70 56M50 76C58 80 66 83 73 83M50 100C57 104 63 107 69 108"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * A fountain pen rendered in a single continuous outline, a quiet reference
 * to writing and lecturing rather than a literal "code" cliche.
 */
export function PenGraphic(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M100 8L30 78L18 120L60 108L130 38C136 32 136 22 130 16L124 10C118 4 106 2 100 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M88 20L118 50" stroke="currentColor" strokeWidth="1.2" />
      <path d="M30 78L60 108" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M18 120L26 100L38 112L18 120Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A single line-art tree, rounded canopy over a simple trunk. Kept loose and
 * sketchy rather than a literal pine/clip-art shape, in keeping with the
 * leaf and pen motifs.
 */
export function TreeGraphic(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M60 10C82 10 98 28 98 48C98 60 92 68 84 72C90 78 94 88 94 98C94 116 78 128 60 128C42 128 26 116 26 98C26 88 30 78 36 72C28 68 22 60 22 48C22 28 38 10 60 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M60 128V152" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M60 152L46 150M60 152L74 150" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M60 40C60 60 60 90 60 110M60 60C52 66 44 70 38 70M60 60C68 66 76 70 82 70M60 86C51 92 42 95 34 95M60 86C69 92 78 95 86 95"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
