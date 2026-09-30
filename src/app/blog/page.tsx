import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta, formatDate } from "@/lib/posts";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blog",
  description: "Patient-friendly articles on bone, joint and spine health.",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();
  return (
    <>
      <PageHeader eyebrow="Blog" title="Bone & Joint Health, Explained">
        <p>Plain-language articles to help you understand your condition and your options.</p>
      </PageHeader>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">{post.tags[0]}</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-brand-800">{post.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.description}</p>
            <p className="mt-4 text-xs text-slate-400">
              {formatDate(post.date)} · {post.readingTime}
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}
