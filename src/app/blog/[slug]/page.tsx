import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostsMeta, getPostBySlug, formatDate } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";
import { CtaBanner } from "@/components/CtaBanner";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link href="/blog" className="text-sm font-medium text-brand-700 hover:text-brand-800">
          ← All articles
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-accent-600">{post.tags.join(" · ")}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-900">{post.title}</h1>
        <p className="mt-4 text-sm text-slate-500">
          {siteConfig.doctorName} · {formatDate(post.date)} · {post.readingTime}
        </p>
        <div
          className="prose prose-slate mt-10 max-w-none prose-headings:font-serif prose-a:text-brand-700"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <p className="mt-12 rounded-2xl bg-slate-100 p-6 text-sm text-slate-600">
          This article is for general education and does not replace a medical consultation.
        </p>
      </article>
      <CtaBanner />
    </>
  );
}
