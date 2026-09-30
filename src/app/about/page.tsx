import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { DoctorPortrait } from "@/components/DoctorPortrait";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.doctorName}, ${siteConfig.title}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={siteConfig.doctorName}>
        <p>
          {siteConfig.title} · {siteConfig.credentials}
        </p>
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto w-full max-w-sm">
          <DoctorPortrait />
        </div>
        <div className="space-y-5 text-slate-600">
          {/* PLACEHOLDER — replace with Dr. Mendhe's real biography. */}
          <p className="text-lg leading-relaxed">{siteConfig.description}</p>
          <p className="leading-relaxed">
            [Biography paragraph — education, where he trained, areas of special interest, and what
            drew him to orthopaedics.]
          </p>
          <p className="leading-relaxed">
            [Approach to care paragraph — how he explains options, when he recommends surgery versus
            conservative treatment, and his focus on rehabilitation.]
          </p>

          <div className="grid gap-6 pt-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-wide text-accent-600">Currently practicing at</h2>
              <p className="mt-3 font-medium text-slate-900">{siteConfig.currentPractice.hospital}</p>
              <p className="text-sm">{siteConfig.currentPractice.location}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-wide text-accent-600">Training &amp; experience</h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {siteConfig.hospitals.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
