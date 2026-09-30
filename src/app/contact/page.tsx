import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a consultation with ${siteConfig.doctorName}.`,
};

export default function ContactPage() {
  const { contact } = siteConfig;
  return (
    <>
      <PageHeader eyebrow="Contact" title="Book a Consultation">
        <p>Call, WhatsApp, or send a message and the clinic will get back to you.</p>
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-wide text-accent-600">Clinic address</h2>
            <address className="mt-3 space-y-0.5 text-sm not-italic text-slate-700">
              {contact.addressLines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </address>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-wide text-accent-600">OPD hours</h2>
            <p className="mt-3 text-sm text-slate-700">{contact.hours}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={contact.phoneHref} className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800">
              Call {contact.phoneDisplay}
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-brand-600"
            >
              WhatsApp
            </a>
          </div>
          {contact.mapEmbedSrc && (
            <iframe
              src={contact.mapEmbedSrc}
              title="Clinic location map"
              loading="lazy"
              className="h-64 w-full rounded-2xl border border-slate-200"
            />
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Send a message</h2>
          <p className="mt-1 mb-6 text-sm text-slate-500">
            Please don&apos;t share urgent medical symptoms here — for emergencies, visit the nearest hospital.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
