import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-900">Page not found</h1>
      <Link href="/" className="mt-8 inline-block rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </section>
  );
}
