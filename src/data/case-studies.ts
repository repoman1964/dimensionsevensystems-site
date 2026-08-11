/** Pre-revenue: all proof is explicitly placeholder. Do not invent clients or metrics. */

export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "placeholder-featured",
    title: "[PLACEHOLDER] Featured conversion system case study",
    industry: "[PLACEHOLDER Industry]",
    summary:
      "[PLACEHOLDER] Brief overview of the system built and the leak it closed. Replace when real client work is available.",
    problem: "[PLACEHOLDER] Primary conversion problem before D7.",
    approach: "[PLACEHOLDER] Components connected and process changes made.",
    outcome: "[PLACEHOLDER] Qualitative outcome description, no invented numbers.",
    metrics: [
      { label: "Metric A", value: "-" },
      { label: "Metric B", value: "-" },
      { label: "Metric C", value: "-" },
    ],
    featured: true,
  },
  {
    id: "placeholder-support-1",
    title: "[PLACEHOLDER] Supporting system example",
    industry: "[PLACEHOLDER Industry]",
    summary: "[PLACEHOLDER] Short summary of a secondary project or architecture.",
    problem: "[PLACEHOLDER] Problem statement.",
    approach: "[PLACEHOLDER] Approach summary.",
    outcome: "[PLACEHOLDER] Outcome summary.",
    metrics: [
      { label: "Metric", value: "-" },
    ],
  },
  {
    id: "placeholder-support-2",
    title: "[PLACEHOLDER] Supporting system example",
    industry: "[PLACEHOLDER Industry]",
    summary: "[PLACEHOLDER] Short summary of a secondary project or architecture.",
    problem: "[PLACEHOLDER] Problem statement.",
    approach: "[PLACEHOLDER] Approach summary.",
    outcome: "[PLACEHOLDER] Outcome summary.",
    metrics: [
      { label: "Metric", value: "-" },
    ],
  },
];

export const testimonials = [
  {
    id: "t1",
    quote: "[PLACEHOLDER] Client testimonial will appear here when available.",
    name: "[PLACEHOLDER Name]",
    role: "[PLACEHOLDER Role / Company]",
  },
] as const;
