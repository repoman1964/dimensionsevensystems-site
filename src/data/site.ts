/** Site-wide config. Business details must match the 10DLC brand registration. */

export const site = {
  name: "Dimension Seven Systems",
  product: "CallCatcher Site",
  tagline: "$500 websites for home-service pros. No monthly fees.",
  description:
    "Get a $500 website built to catch every call and quote request, with no monthly fees. We build your CallCatcher Site from your Google listing and reviews first, and you only pay if you want it.",
  url: "https://dimensionsevensystems.com",
  locale: "en_US",
  email: "hello@dimensionsevensystems.com",
  phone: {
    display: "(678) 333-2628",
    href: "tel:+16783332628",
    sms: "sms:+16783332628",
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
  founder: {
    name: "Jose Madarieta",
    role: "Founder",
  },
  price: "$500",
  /** A finished, live CallCatcher Site (fictional business) to show prospects. */
  demoUrl: "https://sweet-tea-demo.callcatcher.site",
  sms: {
    programName: "Dimension Seven Systems Messages",
  },
  legal: {
    privacyUpdated: "November 1, 2026",
    termsUpdated: "November 1, 2026",
    smsUpdated: "November 1, 2026",
  },
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const trades = [
  "House Cleaning",
  "Pressure Washing",
  "Lawn Care",
  "Landscaping",
  "Painting",
  "Handyman",
  "Roofing",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Fencing",
  "Pest Control",
  "Junk Removal",
  "Remodeling",
  "Concrete",
  "Tree Service",
];
