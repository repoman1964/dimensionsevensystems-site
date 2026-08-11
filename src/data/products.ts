export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoPlaceholder: string;
  screenshotPlaceholder: string;
  href: string;
  external: boolean;
};

export const products: Product[] = [
  {
    id: "dailydialz",
    name: "DailyDialz",
    tagline: "[PLACEHOLDER] Daily dialing system for consistent outreach.",
    description:
      "[PLACEHOLDER] A D7-owned product that helps teams run disciplined, high-volume conversation activity, not a substitute for a full conversion system.",
    logoPlaceholder: "DailyDialz logo",
    screenshotPlaceholder: "DailyDialz product screenshot",
    href: "#", // PLACEHOLDER external product URL
    external: true,
  },
  {
    id: "jobbpulse",
    name: "JobbPulse",
    tagline: "[PLACEHOLDER] Pulse tooling for job and opportunity flow.",
    description:
      "[PLACEHOLDER] A D7-owned product focused on keeping opportunity flow visible and actionable. Component of the broader conversion stack, not the whole service.",
    logoPlaceholder: "JobbPulse logo",
    screenshotPlaceholder: "JobbPulse product screenshot",
    href: "#", // PLACEHOLDER external product URL
    external: true,
  },
];
