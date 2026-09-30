"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

// No backend: opens the visitor's email client with the message pre-filled.
// To receive submissions directly, wire this to a form service later.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "");
    const subject = encodeURIComponent(`Consultation request from ${get("name")}`);
    const body = encodeURIComponent(`Name: ${get("name")}\nPhone: ${get("phone")}\n\n${get("message")}`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center">
        <p className="font-semibold text-brand-800">Thank you — your email app should now be open.</p>
        <p className="mt-1 text-sm text-brand-700">For urgent matters, please call or WhatsApp directly.</p>
      </div>
    );
  }

  const input =
    "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Full name
          <input name="name" type="text" required className={input} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone number
          <input name="phone" type="tel" required className={input} />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700">
        How can we help?
        <textarea name="message" rows={5} required className={input} />
      </label>
      <button type="submit" className="w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800">
        Send Message
      </button>
    </form>
  );
}
