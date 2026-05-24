import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companies, navItems, site, socials } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy text-mist">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="container-px relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-brand text-sm font-bold text-white">
                CI
              </span>
              <div className="leading-none">
                <p className="font-display text-base font-semibold text-white">
                  {site.name}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-sky-brand">
                  Enviable Group
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-mist/70">
              Building businesses, creating opportunities, and driving Africa
              forward through a diversified ecosystem of companies.
            </p>
          </div>

          <FooterCol title="Navigate">
            {navItems.flatMap((item) =>
              item.children
                ? item.children.map((c) => (
                    <FooterLink key={c.href + c.label} href={c.href}>
                      {c.label}
                    </FooterLink>
                  ))
                : [
                    <FooterLink key={item.href} href={item.href}>
                      {item.label}
                    </FooterLink>,
                  ],
            )}
          </FooterCol>

          <FooterCol title="Companies">
            {companies.map((c) => (
              <FooterLink key={c.name} href={c.website} external>
                {c.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            {socials.map((s) => (
              <FooterLink key={s.label} href={s.href} external>
                {s.label}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-mist/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "group inline-flex items-center gap-1 text-sm text-mist/70 transition-colors hover:text-white";

  return (
    <li>
      {external ? (
        <a href={href} className={className}>
          {children}
          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  );
}
