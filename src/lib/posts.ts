import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  relatedTreatment?: string;
};

export type Post = PostMeta & { contentHtml: string };

function readPost(slug: string) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
    relatedTreatment: data.relatedTreatment,
  };
  return { meta, content };
}

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readPost(f.replace(/\.md$/, "")).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!fs.existsSync(path.join(BLOG_DIR, `${slug}.md`))) return null;
  const { meta, content } = readPost(slug);
  const html = await remark().use(remarkGfm).use(remarkHtml).process(content);
  return { ...meta, contentHtml: html.toString() };
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
