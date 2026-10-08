/** Site-wide config. Business details must match the 10DLC brand registration. */

export const site = {
  name: "Dimension Seven Systems",
  shortName: "D7",
  tagline: "Practical technology for small businesses.",
  description:
    "Dimension Seven Systems helps small businesses put practical technology to work in their daily operations: websites, call handling, scheduling, customer follow-up, and simple automation.",
  url: "https://dimensionsevensystems.com",
  locale: "en_US",
  email: "hello@dimensionsevensystems.com",
  phone: {
    display: "(678) 333-2628",
    href: "tel:+16783332628",
  },
  legalName: "Jose Marion Madarieta III",
  legalEntity: "Jose Marion Madarieta III, a sole proprietor doing business as Dimension Seven Systems",
  address: {
    street: "600 Ellen Way",
    city: "Acworth",
    region: "GA",
    postalCode: "30102",
    country: "US",
  },
  logo: {
    src: "/brand/logo.png",
  },
  founder: {
    name: "Jose Madarieta",
    role: "Founder",
  },
  sms: {
    programName: "Dimension Seven Systems Messages",
  },
  legal: {
    privacyUpdated: "October 8, 2026",
    termsUpdated: "October 8, 2026",
    smsUpdated: "October 8, 2026",
  },
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export type Site = typeof site;
