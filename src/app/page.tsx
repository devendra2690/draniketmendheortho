import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getAllPostsMeta, formatDate } from "@/lib/posts";
import { DoctorPortrait } from "@/components/DoctorPortrait";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { TreatmentIcon } from "@/components/TreatmentIcon";
import { CtaBanner } from "@/components/CtaBanner";

function Arrow() {
  return (
    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  const [featured, ...rest] = getAllPostsMeta().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-100 opacity-70 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-accent-100 opacity-60 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-800">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Orthopaedics · {siteConfig.city}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              {siteConfig.doctorName}
            </h1>
            <p className="mt-3 text-xl font-medium text-brand-700">{siteConfig.title}</p>
            <p className="mt-2 text-sm tracking-wide text-slate-500">{siteConfig.credentials}</p>
            <ul className="mt-6 max-w-xl space-y-3">
              {siteConfig.expertiseHighlights.map((item) => (
                <li key={item.label} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  <span>
                    <span className="font-semibold text-slate-900">{item.label}:</span> {item.description}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-800">
                Book a Consultation
              </Link>
              <Link href="/treatments" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-brand-600 hover:text-brand-700">
                Treatments
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <DoctorPortrait priority />
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg shadow-slate-900/10">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-accent-600">Areas of expertise</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Joints · Sports Injuries · Trauma · Spine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice & training */}
      <section className="border-y border-slate-200 bg-brand-50/60">
        <Reveal className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">Currently practicing at</p>
            <p className="mt-3 font-serif text-lg font-medium text-slate-900">{siteConfig.currentPractice.hospital}</p>
            <p className="text-sm text-slate-500">{siteConfig.currentPractice.location}</p>
          </div>
          <div className="border-t border-brand-900/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Training &amp; experience</p>
            <ul className="mt-3 space-y-2">
              {siteConfig.hospitals.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-brand-800">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:grid-cols-3 sm:px-6">
          {siteConfig.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl font-medium text-white sm:text-5xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-brand-200">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Treatments */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">What he treats</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Treatments &amp; Expertise</h2>
          <p className="mt-3 text-slate-600">
            Comprehensive bone, joint and spine care — from conservative treatment to advanced surgery.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.treatments.map((item, i) => (
            <Reveal key={item.slug} delay={i * 70}>
              <Link
                href={`/treatments/${item.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                  <TreatmentIcon slug={item.slug} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.short}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-700">
                  Learn more <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-brand-900">
        <Reveal className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <p className="font-serif text-2xl font-medium leading-relaxed text-white sm:text-3xl">“{siteConfig.quote}”</p>
          <p className="mt-5 text-sm font-medium tracking-wide text-brand-300">
            — {siteConfig.doctorName}, {siteConfig.title}
          </p>
        </Reveal>
      </section>

      {/* Blog */}
      {featured && (
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">Bone &amp; joint health, explained</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">From the Blog</h2>
            </div>
            <Link href="/blog" className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:block">
              View all articles →
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <Link
                href={`/blog/${featured.slug}`}
                className="flex h-full flex-col justify-between rounded-2xl bg-brand-900 p-8 text-white transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">{featured.tags[0]}</p>
                  <h3 className="mt-3 font-serif text-2xl font-medium leading-snug sm:text-3xl">{featured.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-100">{featured.description}</p>
                </div>
                <p className="mt-8 text-xs font-medium text-brand-300">
                  {formatDate(featured.date)} · {featured.readingTime}
                </p>
              </Link>
            </Reveal>
            <div className="flex flex-col gap-6">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={(i + 1) * 90} className="flex-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{post.tags[0]}</p>
                    <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-brand-800">{post.title}</h3>
                    <p className="mt-2 text-xs text-slate-400">{post.readingTime}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials — hidden until real reviews are added */}
      {siteConfig.testimonials.length > 0 && (
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <Reveal className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">Patient experiences</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">What Patients Say</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {siteConfig.testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <figure className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <blockquote className="text-sm leading-relaxed text-slate-700">“{t.text}”</blockquote>
                    <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                      {t.name}
                      <span className="block text-xs font-normal text-slate-500">{t.source}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            {siteConfig.googleReviewsUrl && (
              <p className="mt-8 text-center">
                <a href={siteConfig.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-700">
                  Read more reviews on Google →
                </a>
              </p>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">Questions patients ask</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h2>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <FaqAccordion items={siteConfig.generalFaqs} />
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
