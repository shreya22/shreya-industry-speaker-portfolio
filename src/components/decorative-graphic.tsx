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
