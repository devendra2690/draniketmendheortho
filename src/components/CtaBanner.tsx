import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand-800 px-8 py-10 text-white md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Living with bone or joint pain?</h2>
          <p className="mt-2 max-w-xl text-sm text-brand-100">
            Book a consultation for joint pain, a sports injury, a fracture, back pain or a second opinion on surgery.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-900 hover:bg-accent-300">
            Contact the Clinic
          </Link>
          <a href={siteConfig.contact.phoneHref} className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
