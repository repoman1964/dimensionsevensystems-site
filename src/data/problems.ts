export type Problem = {
  id: string;
  title: string;
  description: string;
  category: string;
  featured?: boolean;
  size?: "large" | "medium" | "compact";
};

export const problems: Problem[] = [
  {
    id: "missed-calls",
    title: "Calls come in while you're on the job.",
    description:
      "You can't answer the phone with your hands full. The caller doesn't leave a message, and they call the next business on the list.",
    category: "Calls",
    featured: true,
    size: "large",
  },
  {
    id: "no-website",
    title: "Customers can't find you online.",
    description:
      "No website, or one that hasn't been touched in years. People search, don't find much, and move on.",
    category: "Website",
    size: "medium",
  },
  {
    id: "phone-tag",
    title: "Scheduling takes too much back-and-forth.",
    description:
      "Booking a single appointment turns into a string of calls and texts. Customers wish they could just pick a time.",
    category: "Scheduling",
    size: "medium",
  },
  {
    id: "no-shows",
    title: "Customers forget appointments.",
    description:
      "Without reminders, people forget. An empty slot is time you can't get back.",
    category: "Reminders",
    size: "compact",
  },
  {
    id: "scattered-info",
    title: "Customer info is everywhere.",
    description:
      "Names and numbers live in your phone, a notebook, and three different apps. Finding a job history takes too long.",
    category: "Records",
    size: "compact",
  },
  {
    id: "follow-up",
    title: "Follow-up falls through the cracks.",
    description:
      "Quotes go out and nobody checks back. Happy customers are never asked for a review.",
    category: "Follow-up",
    size: "compact",
  },
  {
    id: "repetitive-work",
    title: "The same tasks, every single day.",
    description:
      "Copying details between apps, sending the same messages, re-typing invoices. Work a computer should be doing.",
    category: "Admin",
    size: "compact",
  },
];
