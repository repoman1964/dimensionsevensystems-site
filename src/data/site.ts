/** Site-wide config. Business details must match the 10DLC brand registration. */

export const site = {
  name: "Dimension Seven Systems",
  product: "CallCatcher Site",
  tagline: "$500 websites for home-service pros. No monthly fees.",
  description:
    "Get a $500 website that gets better after every job: post your work from your phone and it goes live on your site. No monthly fees, and you only pay if you want it after you've seen it.",
  url: "https://dimensionsevensystems.com",
  locale: "en_US",
  email: "hello@dimensionsevensystems.com",
  phone: {
    display: "(706) 940-3720",
    href: "tel:+17069403720",
    sms: "sms:+17069403720",
  },
  legalName: "Dimension Seven Systems",
  legalEntity: "Dimension Seven Systems",
  address: {
    city: "Atlanta",
    region: "GA",
    country: "US",
  },
  founder: {
    name: "Jose",
    location: "Atlanta, Georgia",
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

export const addressLine = `${site.address.city}, ${site.address.region}`;

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
