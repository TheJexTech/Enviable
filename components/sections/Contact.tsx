"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { contactCategories, site, socials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const [category, setCategory] = useState<string>(contactCategories[0]);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire this to an email service or API route in production.
    setSent(true);
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-cloud">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-px relative">
        {showHeading && (
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Let&apos;s start a{" "}
                <span className="text-gradient">conversation</span>
              </>
            }
            description="Whether it's a partnership, media request, or speaking invitation — the office of Chukwuemeka Ituma is ready to connect."
          />
        )}

        <div
          className={cn(
            "grid gap-8 lg:grid-cols-[0.85fr_1.15fr]",
            showHeading && "mt-16",
          )}
        >
          {/* Left: details */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-mist bg-white p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-navy">
                Office of {site.shortName}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                For all formal inquiries, please use the form or reach out
                through the channels below.
              </p>

              <ul className="mt-7 space-y-5">
                <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
                <ContactRow icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} />
                <ContactRow icon={MapPin} label="Location" value={site.location} />
              </ul>
            </div>

            <div className="rounded-3xl border border-mist bg-white p-8 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Connect
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="group rounded-2xl border border-mist px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft"
                  >
                    <p className="text-sm font-semibold text-navy">{s.label}</p>
                    <p className="truncate text-xs text-ink/55">{s.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-mist bg-white p-8 shadow-soft sm:p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
                  Message received
                </h3>
                <p className="mt-2 max-w-sm text-ink/65">
                  Thank you for reaching out. A member of the office will respond
                  to your inquiry shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-outline mt-8"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="mb-3 block text-sm font-semibold text-navy">
                    Inquiry type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {contactCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300",
                          category === cat
                            ? "border-primary bg-primary text-white"
                            : "border-mist bg-cloud text-ink/65 hover:border-primary/40",
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email address" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="Organisation" htmlFor="org">
                  <input
                    id="org"
                    name="org"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company or organisation (optional)"
                    className="form-input"
                  />
                </Field>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    className="form-input resize-none"
                  />
                </Field>

                <input type="hidden" name="category" value={category} />

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          {label}
        </p>
        <p className="text-sm font-medium text-navy">{value}</p>
      </div>
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-navy"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
