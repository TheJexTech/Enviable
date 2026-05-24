"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, type NavItem } from "@/lib/content";
import { cn } from "@/lib/utils";

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
  return Boolean(item.children?.some((c) => c.href === pathname));
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menus on route change.
  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Close dropdown on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-all duration-500",
          scrolled || openDropdown
            ? "border-b border-white/10 bg-navy/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="container-px flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="group flex items-center"
            aria-label="Chukwuemeka Ituma Enviable — home"
          >
            <span className="whitespace-nowrap font-sans text-[0.72rem] font-light uppercase tracking-[0.18em] text-white transition-colors group-hover:text-sky-brand sm:text-sm sm:tracking-[0.24em] lg:text-base lg:tracking-[0.3em]">
              Chukwuemeka Ituma Enviable
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item);

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-white/10 text-white"
                        : "text-mist/80 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              const dropdownOpen = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(item.label)}
                  onMouseLeave={handleLeave}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((v) => (v === item.label ? null : item.label))
                    }
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active || dropdownOpen
                        ? "bg-white/10 text-white"
                        : "text-mist/80 hover:bg-white/5 hover:text-white",
                    )}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        dropdownOpen && "rotate-180",
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        role="menu"
                        className="absolute left-0 top-full w-72 pt-3"
                      >
                        <div className="glass overflow-hidden rounded-2xl p-2 shadow-card-hover">
                          {item.children.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              role="menuitem"
                              className={cn(
                                "block rounded-xl px-4 py-3 transition-colors",
                                pathname === child.href
                                  ? "bg-white/10"
                                  : "hover:bg-white/5",
                              )}
                            >
                              <span className="block text-sm font-semibold text-white">
                                {child.label}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-mist/60">
                                {child.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden btn-primary sm:inline-flex">
              Get in Touch
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-white/10 bg-navy/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-6">
              {navItems.map((item) => {
                const active = isActive(pathname, item);

                if (!item.children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-white/10 text-white"
                          : "text-mist/90 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const expanded = mobileExpanded === item.label;

                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded((v) =>
                          v === item.label ? null : item.label,
                        )
                      }
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-white/10 text-white"
                          : "text-mist/90 hover:bg-white/5 hover:text-white",
                      )}
                      aria-expanded={expanded}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          expanded && "rotate-180",
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 flex flex-col gap-1 border-l border-white/10 py-1 pl-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.href + child.label}
                                href={child.href}
                                className={cn(
                                  "rounded-lg px-3 py-2.5 text-sm transition-colors",
                                  pathname === child.href
                                    ? "text-white"
                                    : "text-mist/70 hover:text-white",
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <Link href="/contact" className="btn-primary mt-3 w-full">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
