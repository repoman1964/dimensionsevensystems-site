export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const primaryCta = {
  label: "Get in touch",
  href: "/contact",
  event: "header_cta_clicked",
} as const;

export const footerNav = {
  company: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Websites", href: "/services#websites" },
    { label: "Call handling", href: "/services#calls" },
    { label: "Scheduling & reminders", href: "/services#scheduling" },
    { label: "Customer follow-up", href: "/services#follow-up" },
    { label: "Customer records", href: "/services#records" },
    { label: "Custom tools", href: "/services#custom" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "SMS Terms", href: "/sms" },
  ],
} as const;
