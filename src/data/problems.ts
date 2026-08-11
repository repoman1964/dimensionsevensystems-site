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
    id: "not-contacted",
    title: "New leads sit untouched.",
    description:
      "Calls, forms, and inquiries come in, but nobody gets to them fast enough. By the time someone responds, the prospect has already moved on.",
    category: "Response",
    featured: true,
    size: "large",
  },
  {
    id: "slow-response",
    title: "New leads wait too long for a response.",
    description:
      "Minutes turn into hours while the opportunity gets colder. The longer they wait, the harder the sale becomes.",
    category: "Speed",
    size: "medium",
  },
  {
    id: "missed-calls",
    title: "Missed calls never get recovered.",
    description:
      "The phone rings. Nobody answers. Nobody follows up. A high-intent prospect disappears without another conversation.",
    category: "Calls",
    size: "medium",
  },
  {
    id: "weak-follow-up",
    title: "Follow-up stops too soon.",
    description:
      "A call or two gets made, a couple of messages go out, then the lead is forgotten. Good opportunities die because nobody keeps the conversation moving.",
    category: "Follow-up",
    size: "compact",
  },
  {
    id: "low-booking",
    title: "Interested prospects never book.",
    description:
      "They show interest, but friction, delay, or weak follow-up keeps them off the calendar. Sales opportunities never become sales conversations.",
    category: "Booking",
    size: "compact",
  },
  {
    id: "no-shows",
    title: "Booked appointments don't show.",
    description:
      "The appointment gets scheduled, but there's no real confirmation, reminder, or recovery process. Your calendar looks full. Your sales team still sits waiting.",
    category: "Attendance",
    size: "compact",
  },
  {
    id: "cold-leads",
    title: "Old leads sit untouched.",
    description:
      "Past inquiries and old CRM records collect dust instead of getting another chance to convert. You already paid to acquire them. Then you stopped working them.",
    category: "Reactivation",
    size: "compact",
  },
  {
    id: "visibility",
    title: "Nobody knows where deals are getting stuck.",
    description:
      "Leads come in. Sales come out. Everything between those two points is hard to see. If you can't see where opportunities are being lost, you can't fix it.",
    category: "Visibility",
    size: "compact",
  },
];
