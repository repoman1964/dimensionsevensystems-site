export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Conversion Systems", href: "/conversion-systems" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
] as const;

export const primaryCta = {
  label: "Talk to D7",
  href: "/conversion-review",
  event: "header_cta_clicked",
} as const;

export const footerNav = {
  company: [
    { label: "Home", href: "/" },
    { label: "Conversion Systems", href: "/conversion-systems" },
    { label: "Our Work", href: "/our-work" },
    { label: "About", href: "/about" },
    { label: "Conversion Review", href: "/conversion-review" },
  ],
  systems: [
    { label: "Lead Response System", href: "/conversion-systems#lead-response" },
    { label: "Missed-Call Recovery", href: "/conversion-systems#missed-call" },
    { label: "Appointment Conversion", href: "/conversion-systems#appointment" },
    { label: "Old-Lead Reactivation", href: "/conversion-systems#reactivation" },
    { label: "Sales Follow-Up", href: "/conversion-systems#follow-up" },
    { label: "Custom Conversion System", href: "/conversion-systems#custom" },
  ],
  products: [
    { label: "DailyDialz", href: "/#products" },
    { label: "JobbPulse", href: "/#products" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
  ],
} as const;
