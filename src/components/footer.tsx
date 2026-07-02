import { Newspaper, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { LeafGraphic } from "@/components/decorative-graphic";
import { siteConfig } from "@/lib/site-config";

const links = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: siteConfig.social.github, icon: GithubIcon },
  { label: "The Longer Thought", href: siteConfig.social.substack, icon: Newspaper },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      <LeafGraphic
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-[4%] hidden size-28 rotate-[-8deg] text-brand/[0.08] sm:block"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg text-foreground">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tech Lead at Monzo. Guest lectures, workshops and talks.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
