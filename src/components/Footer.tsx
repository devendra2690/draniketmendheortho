import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl font-medium text-white">{siteConfig.doctorName}</p>
          <p className="mt-1 text-sm text-brand-300">{siteConfig.title}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200">{siteConfig.description}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">Contact</p>
          <address className="mt-4 space-y-1 text-sm not-italic">
            {contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="pt-2">
              <a href={contact.phoneHref} className="hover:text-white">{contact.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-brand-300 sm:px-6">
          © {new Date().getFullYear()} {siteConfig.siteName}. Information on this site is for general
          education and does not replace a medical consultation.
        </p>
      </div>
    </footer>
  );
}
