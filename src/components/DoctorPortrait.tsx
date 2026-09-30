import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

// Shows the configured photo, or an initials card until one is provided.
export function DoctorPortrait({ priority = false }: { priority?: boolean }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 via-brand-50 to-accent-100 shadow-xl shadow-brand-900/10 ring-1 ring-black/5">
      {siteConfig.heroImage ? (
        <Image
          src={siteConfig.heroImage}
          alt={`${siteConfig.doctorName}, ${siteConfig.title}`}
          fill
          priority={priority}
          sizes="(min-width: 768px) 400px, 90vw"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-brand-700">
          <span className="font-serif text-7xl font-semibold">AM</span>
          <span className="text-xs font-medium uppercase tracking-wide text-brand-600/70">
            [Doctor photo]
          </span>
        </div>
      )}
    </div>
  );
}
