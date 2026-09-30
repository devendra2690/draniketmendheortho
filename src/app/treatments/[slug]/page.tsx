import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { getAllPostsMeta } from "@/lib/posts";
import { FaqAccordion } from "@/components/FaqAccordion";
import { TreatmentIcon } from "@/components/TreatmentIcon";
import { CtaBanner } from "@/components/CtaBanner";

type Params = { slug: string };

const findTreatment = (slug: string) => siteConfig.treatments.find((t) => t.slug === slug);

export function generateStaticParams() {
  return siteConfig.treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const item = findTreatment((await params).slug);
  return item ? { title: item.title, description: item.short } : {};
}

export default async function TreatmentPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = findTreatment(slug);
  if (!item) notFound();

  const others = siteConfig.treatments.filter((t) => t.slug !== slug);
  const related = getAllPostsMeta().filter((p) => p.relatedTreatment === slug);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-50">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-100 opacity-60 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <Link href="/treatments" className="text-sm font-medium text-brand-700 hover:text-brand-800">
            ← All treatments
          </Link>
          <div className="mt-6 flex items-center gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm">
              <TreatmentIcon slug={item.slug} className="h-7 w-7" />
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{item.title}</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <p className="text-lg leading-relaxed text-slate-600">{item.description}</p>

        <h2 className="mt-10 font-sans text-xs font-semibold uppercase tracking-wide text-slate-400">What this includes</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              {point}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-sans text-xs font-semibold uppercase tracking-wide text-slate-400">Frequently asked questions</h2>
        <div className="mt-4">
          <FaqAccordion items={item.faqs} />
        </div>

        {related.length > 0 && (
          <>
            <h2 className="mt-12 font-sans text-xs font-semibold uppercase tracking-wide text-slate-400">Related reading</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300">
                  <p className="text-sm font-semibold text-slate-900">{post.title}</p>
                  <p className="mt-1 text-xs text-slate-400">{post.readingTime}</p>
                </Link>
              ))}
            </div>
          </>
        )}

        <p className="mt-12 rounded-2xl bg-slate-100 p-6 text-sm text-slate-600">
          This page is for general education and does not replace personalised medical advice. Please{" "}
          <Link href="/contact" className="font-medium text-brand-700">consult {siteConfig.doctorName}</Link> for guidance
          specific to you.
        </p>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-lg font-semibold text-slate-900">Other treatments</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <Link key={o.slug} href={`/treatments/${o.slug}`} className="group rounded-xl border border-slate-200 p-4 hover:border-brand-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <TreatmentIcon slug={o.slug} className="h-4 w-4" />
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-900 group-hover:text-brand-800">{o.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-16">
        <CtaBanner />
      </div>
    </>
  );
}
