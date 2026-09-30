import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/PageHeader";
import { TreatmentIcon } from "@/components/TreatmentIcon";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Joint replacement, arthroscopy, fracture care, spine care, arthritis and paediatric orthopaedics.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHeader eyebrow="Treatments" title="Bone, Joint & Spine Care">
        <p>Evidence-based orthopaedic treatment — conservative care first, surgery when it is clearly the right choice.</p>
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2">
        {siteConfig.treatments.map((item, i) => (
          <Reveal key={item.slug} delay={(i % 2) * 80}>
            <Link
              href={`/treatments/${item.slug}`}
              className="group flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <TreatmentIcon slug={item.slug} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-brand-800">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <CtaBanner />
    </>
  );
}
