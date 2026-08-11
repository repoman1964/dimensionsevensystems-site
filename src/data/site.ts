/** Site-wide config. Replace placeholders when real details arrive. */

export const site = {
  name: "Dimension Seven Systems",
  shortName: "D7",
  tagline:
    "[PLACEHOLDER] We build the systems between lead generation and the sale.",
  description:
    "[PLACEHOLDER] Dimension Seven Systems builds conversion systems that help businesses convert more of the leads and opportunities they already have.",
  url: "https://dimensionsevensystems.com",
  locale: "en_US",
  email: "hello@dimensionsevensystems.com", // PLACEHOLDER — replace with real inbox
  phone: "", // PLACEHOLDER
  location: "", // PLACEHOLDER
  calendlyUrl: "https://calendly.com/placeholder-d7/conversion-review", // PLACEHOLDER
  logo: {
    src: "/brand/logo.png",
  },
  social: {
    linkedin: "", // PLACEHOLDER
    x: "", // PLACEHOLDER
    youtube: "", // PLACEHOLDER
  },
  founder: {
    name: "[PLACEHOLDER Founder Name]",
    role: "Founder",
    bio: "[PLACEHOLDER] Short founder bio for the About and video sections.",
    videoUrl: "", // PLACEHOLDER
    imageUrl: "", // PLACEHOLDER
  },
  legal: {
    privacyUpdated: "2026-08-11",
    termsUpdated: "2026-08-11",
  },
} as const;

export type Site = typeof site;
