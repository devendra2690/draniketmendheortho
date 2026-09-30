// Central place for every site-wide fact. Anything wrapped in [square
// brackets] is a PLACEHOLDER — search this file for "PLACEHOLDER" and "[" and
// replace with Dr. Mendhe's real details before going live.

export const siteConfig = {
  siteName: "Dr. Aniket Mendhe Orthopaedics", // PLACEHOLDER — clinic / brand name
  doctorName: "Dr. Aniket Mendhe",
  credentials: "[MBBS, MS (Orthopaedics), Fellowship]", // PLACEHOLDER
  title: "Consultant Orthopaedic Surgeon", // PLACEHOLDER — confirm exact title
  city: "[City]", // PLACEHOLDER
  tagline: "Restoring movement, relieving pain — bone and joint care you can trust.",
  description:
    "Dr. Aniket Mendhe is a Consultant Orthopaedic Surgeon offering evidence-based care for joint pain, sports injuries, fractures, spine problems and joint replacement.", // PLACEHOLDER — personalise
  metaDescription:
    "Dr. Aniket Mendhe, Consultant Orthopaedic Surgeon — care for knee and hip pain, sports injuries, fractures, spine problems and joint replacement.",

  url: "https://www.example.com", // PLACEHOLDER — real domain

  // Leave empty to show an initials card instead of a photo.
  // Drop a photo into public/images/ and set e.g. "/images/dr-mendhe-hero.jpg".
  heroImage: "",

  contact: {
    phoneDisplay: "[+91 XXXXX XXXXX]", // PLACEHOLDER
    phoneHref: "tel:+910000000000", // PLACEHOLDER
    whatsappHref: "https://wa.me/910000000000", // PLACEHOLDER
    email: "[email@example.com]", // PLACEHOLDER
    addressLines: ["[Hospital / clinic name]", "[Street address]", "[City, State PIN]", "India"], // PLACEHOLDER
    hours: "[Mon–Sat, 10:00 AM – 2:00 PM · 5:00 PM – 8:00 PM]", // PLACEHOLDER
    mapEmbedSrc: "", // PLACEHOLDER — Google Maps embed URL; map hidden while empty
  },

  currentPractice: {
    hospital: "[Current hospital name]", // PLACEHOLDER
    location: "[City]", // PLACEHOLDER
  },

  // Training / past hospitals, most recent first. PLACEHOLDER
  hospitals: ["[Training hospital 1, City]", "[Training hospital 2, City]", "[Training hospital 3, City]"],

  // PLACEHOLDER — real numbers only.
  stats: [
    { value: "[X]+", label: "Years in Practice" },
    { value: "[X]+", label: "Joint Replacements" },
    { value: "[X]+", label: "Patients Treated" },
  ],

  // PLACEHOLDER — rewrite with Dr. Mendhe's actual strengths.
  expertiseHighlights: [
    {
      label: "Joint Replacement",
      description: "[Knee and hip replacement experience — number of procedures, techniques used.]",
    },
    {
      label: "Arthroscopy & Sports Injuries",
      description: "[Keyhole surgery for ligament, meniscus and shoulder injuries.]",
    },
    {
      label: "Trauma & Fracture Care",
      description: "[Emergency fracture fixation and complex trauma management.]",
    },
  ],

  quote:
    "Every patient deserves to walk, work and play without pain — with treatment that is honest, evidence-based and explained clearly.", // PLACEHOLDER — Dr. Mendhe's own words

  googleReviewsUrl: "", // PLACEHOLDER — Google Business Profile link

  // Real reviews only (copy verbatim from Google). Section is hidden while empty.
  testimonials: [] as { name: string; text: string; source: string }[],

  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/treatments", label: "Treatments" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],

  treatments: [
    {
      slug: "joint-replacement",
      title: "Knee & Hip Replacement",
      short: "Total and partial joint replacement for advanced arthritis.",
      description:
        "When arthritis has worn away a joint and pain no longer responds to medicines, physiotherapy or injections, replacing the damaged surfaces can restore pain-free movement. Care covers careful evaluation, surgery, and a structured rehabilitation plan.",
      points: [
        "Total knee replacement (TKR) and partial knee replacement.",
        "Total hip replacement (THR) for arthritis and avascular necrosis.",
        "Pre-operative assessment and implant planning.",
        "Early mobilisation and guided physiotherapy after surgery.",
      ],
      faqs: [
        {
          question: "When should I consider a knee replacement?",
          answer:
            "Usually when knee pain from arthritis limits daily activities like walking, climbing stairs or sleeping, and has not improved with medicines, weight management, physiotherapy or injections over several months.",
        },
        {
          question: "How soon can I walk after surgery?",
          answer:
            "Most patients start walking with support within a day or two of surgery. Recovery to comfortable independent walking typically takes a few weeks, guided by physiotherapy.",
        },
        {
          question: "How long does a joint replacement last?",
          answer:
            "Modern implants commonly last 15–20 years or more, depending on activity, body weight, bone quality and following post-operative advice.",
        },
      ],
    },
    {
      slug: "sports-injuries-arthroscopy",
      title: "Sports Injuries & Arthroscopy",
      short: "Keyhole surgery for ligament, meniscus and shoulder injuries.",
      description:
        "Arthroscopy uses a small camera and instruments through tiny incisions to diagnose and repair joint injuries, with less pain and faster recovery than open surgery. Many sports injuries can also be managed without surgery.",
      points: [
        "ACL and PCL ligament reconstruction.",
        "Meniscus repair and trimming.",
        "Shoulder arthroscopy — rotator cuff repair, dislocation.",
        "Return-to-sport rehabilitation planning.",
      ],
      faqs: [
        {
          question: "Does every ligament tear need surgery?",
          answer:
            "No. Partial tears and some complete tears in less active patients can be managed with physiotherapy. Surgery is usually advised when the knee feels unstable or for people returning to pivoting sports.",
        },
        {
          question: "How long is recovery after ACL reconstruction?",
          answer:
            "Walking resumes within days, but return to sport generally takes 6–9 months of structured rehabilitation.",
        },
      ],
    },
    {
      slug: "fracture-trauma-care",
      title: "Fracture & Trauma Care",
      short: "Emergency and planned treatment of fractures and injuries.",
      description:
        "From simple fractures treated in a cast to complex injuries needing surgical fixation, the aim is to restore alignment, stability and function so the bone heals well.",
      points: [
        "Plaster and splint management for stable fractures.",
        "Surgical fixation with plates, screws and nails.",
        "Hip fracture care in elderly patients.",
        "Management of delayed or non-healing fractures.",
      ],
      faqs: [
        {
          question: "How long does a fracture take to heal?",
          answer:
            "Most adult fractures take 6–12 weeks to heal, depending on the bone, the type of fracture, age, and health factors such as diabetes or smoking.",
        },
        {
          question: "Will the implants need to be removed later?",
          answer:
            "Usually not. Implants are often left in place for life unless they cause discomfort or there is a specific reason to remove them.",
        },
      ],
    },
    {
      slug: "spine-care",
      title: "Back & Spine Care",
      short: "Evaluation and treatment of back pain, slip disc and sciatica.",
      description:
        "Most back and neck pain improves with the right non-surgical care. Careful assessment identifies the cause and the small number of patients who benefit from procedures or surgery.",
      points: [
        "Assessment of low back pain and neck pain.",
        "Slip disc (disc prolapse) and sciatica management.",
        "Posture, exercise and physiotherapy guidance.",
        "Referral pathways for surgical spine care when needed.",
      ],
      faqs: [
        {
          question: "Do I need an MRI for back pain?",
          answer:
            "Not always. An MRI is usually needed only if pain persists beyond several weeks, or if there are warning signs such as leg weakness, numbness, or bladder/bowel changes.",
        },
      ],
    },
    {
      slug: "arthritis-joint-pain",
      title: "Arthritis & Joint Pain",
      short: "Non-surgical care for knee, shoulder and hand pain.",
      description:
        "Early arthritis and joint pain can often be controlled without surgery through medicines, exercise, weight management and targeted injections.",
      points: [
        "Diagnosis of osteoarthritis and inflammatory joint pain.",
        "Joint injections where appropriate.",
        "Exercise and weight-management plans.",
        "Frozen shoulder and tennis elbow treatment.",
      ],
      faqs: [
        {
          question: "Can knee arthritis be treated without surgery?",
          answer:
            "Yes, especially in early stages. Strengthening exercises, weight loss, pain relief and injections help many people delay or avoid surgery.",
        },
      ],
    },
    {
      slug: "paediatric-orthopaedics",
      title: "Paediatric Orthopaedics",
      short: "Bone and joint problems in children.",
      description:
        "Children's bones are still growing, so injuries and deformities need a different approach. Care focuses on correct diagnosis and protecting healthy growth.",
      points: [
        "Children's fractures and growth-plate injuries.",
        "Flat feet, bow legs and knock knees assessment.",
        "Clubfoot and developmental hip conditions.",
        "Limping child evaluation.",
      ],
      faqs: [
        {
          question: "Are bow legs normal in toddlers?",
          answer:
            "Mild bow legs are common and often normal up to about age 2. It's worth getting checked if they are severe, one-sided, or persist beyond that age.",
        },
      ],
    },
  ],

  generalFaqs: [
    {
      question: "Do I need a referral to see an orthopaedic surgeon?",
      answer:
        "No. You can book directly for bone, joint, muscle or spine concerns. If another doctor has already examined you, bring their notes.",
    },
    {
      question: "What should I bring to my first consultation?",
      answer:
        "Any X-rays, MRI or CT scans (films and reports), recent blood tests, a list of current medicines, and details of previous surgeries.",
    },
    {
      question: "Does seeing an orthopaedic surgeon mean I'll need surgery?",
      answer:
        "Not at all. Most bone and joint problems are treated without surgery. Surgery is recommended only when it is clearly the best option for you.",
    },
    {
      question: "Do you provide second opinions?",
      answer:
        "Yes. If you've been advised surgery and would like another view, bring your reports and imaging to the consultation.",
    },
  ],

  seoKeywords: [
    "Orthopaedic surgeon",
    "Knee replacement surgeon",
    "Hip replacement",
    "Sports injury doctor",
    "Arthroscopy surgeon",
    "Fracture treatment",
    "Back pain doctor",
  ],
};

export type Treatment = (typeof siteConfig.treatments)[number];
