// Simple line icons, one per treatment slug.
const paths: Record<string, string> = {
  // knee joint: femur + tibia meeting at a joint
  "joint-replacement":
    "M9 2v6a3 3 0 0 0 6 0V2M9 22v-6a3 3 0 0 1 6 0v6M8 12h8",
  // runner / motion
  "sports-injuries-arthroscopy":
    "M13 4a1.5 1.5 0 1 0 0-.01M7 21l3-6 3 2v4M10 15l1-5 4 2 3-1M11 10l-3 1-2 3",
  // broken bone
  "fracture-trauma-care":
    "M5 19l5-5M14 10l5-5M10 14l2-1-1-2 3-1M4 18a1.5 1.5 0 1 0 2 2M18 4a1.5 1.5 0 1 0 2 2",
  // stacked vertebrae
  "spine-care":
    "M9 3h6v3H9zM8.5 8.5h7v3h-7zM8.5 14h7v3h-7zM9 19.5h6V22H9z",
  // hand with joints
  "arthritis-joint-pain":
    "M7 13V6a1.5 1.5 0 0 1 3 0v5M10 11V4a1.5 1.5 0 0 1 3 0v7M13 11V5a1.5 1.5 0 0 1 3 0v7M16 12V8a1.5 1.5 0 0 1 3 0v6a8 8 0 0 1-8 8h-1a6 6 0 0 1-5-3l-2-4a1.5 1.5 0 0 1 2.5-1.5L7 15",
  // child
  "paediatric-orthopaedics":
    "M12 6.5a2 2 0 1 0 0-.01M8 11l4-1 4 1M12 10v6M9.5 21l2.5-5 2.5 5",
};

export function TreatmentIcon({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d={paths[slug] ?? "M12 3v18M3 12h18"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
