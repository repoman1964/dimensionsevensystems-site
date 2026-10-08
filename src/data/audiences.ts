export const fitFor = [
  {
    id: "trades",
    title: "Trades and home services",
    description:
      "Plumbers, electricians, HVAC, roofers, landscapers, and cleaners who are on a job when the phone rings.",
  },
  {
    id: "appointments",
    title: "Appointment-based businesses",
    description:
      "Salons, clinics, studios, and shops that live and die by a full, reliable calendar.",
  },
  {
    id: "no-website",
    title: "Businesses without a website",
    description:
      "If customers can only find you on a map listing or by word of mouth, a simple site is the first step.",
  },
  {
    id: "owner-operated",
    title: "Owner-operated businesses",
    description:
      "Owners who do the work, answer the phone, and handle the paperwork, and want some of that time back.",
  },
  {
    id: "paper-and-spreadsheets",
    title: "Businesses running on paper",
    description:
      "Notebooks, sticky notes, and spreadsheets that worked fine when you were smaller and don't anymore.",
  },
] as const;

export const notFitFor = [
  {
    id: "enterprise",
    title: "Large companies with an IT department",
    description:
      "We work with small teams. Enterprise rollouts are better served by larger firms.",
  },
  {
    id: "lead-lists",
    title: "Looking to buy lead lists",
    description:
      "We don't sell contact lists or run bulk messaging campaigns.",
  },
  {
    id: "set-and-forget",
    title: "Want software with no change at all",
    description:
      "Every tool needs a little adoption. We keep it simple, but you have to use it.",
  },
] as const;
