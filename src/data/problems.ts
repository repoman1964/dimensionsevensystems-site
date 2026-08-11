export type Problem = {
  id: string;
  title: string;
  description: string;
  consequence: string;
  category: string;
  featured?: boolean;
  size?: "large" | "medium" | "compact";
};

export const problems: Problem[] = [
  {
    id: "not-contacted",
    title: "[PLACEHOLDER] Leads not being contacted",
    description:
      "[PLACEHOLDER] Inbound opportunities sit untouched while competitors respond first.",
    consequence: "[PLACEHOLDER] Paid traffic and referrals go cold before a human engages.",
    category: "Response",
    featured: true,
    size: "large",
  },
  {
    id: "slow-response",
    title: "[PLACEHOLDER] Slow lead response",
    description:
      "[PLACEHOLDER] Minutes turn into hours between inquiry and first contact.",
    consequence: "[PLACEHOLDER] Conversion probability drops with every delay.",
    category: "Speed",
    size: "medium",
  },
  {
    id: "missed-calls",
    title: "[PLACEHOLDER] Missed calls",
    description:
      "[PLACEHOLDER] Ringing phones go unanswered with no structured recovery.",
    consequence: "[PLACEHOLDER] High-intent callers never hear back.",
    category: "Calls",
    size: "medium",
  },
  {
    id: "weak-follow-up",
    title: "[PLACEHOLDER] Weak follow-up",
    description:
      "[PLACEHOLDER] One attempt, then silence — no sequence, no ownership.",
    consequence: "[PLACEHOLDER] Warm leads exit the pipeline unnoticed.",
    category: "Follow-up",
    size: "compact",
  },
  {
    id: "low-booking",
    title: "[PLACEHOLDER] Low appointment booking",
    description:
      "[PLACEHOLDER] Conversations happen, but calendars stay empty.",
    consequence: "[PLACEHOLDER] Sales effort never turns into booked time.",
    category: "Booking",
    size: "compact",
  },
  {
    id: "no-shows",
    title: "[PLACEHOLDER] No-shows",
    description:
      "[PLACEHOLDER] Appointments are set without reminders or rebooking paths.",
    consequence: "[PLACEHOLDER] Booked revenue evaporates on the calendar.",
    category: "Attendance",
    size: "compact",
  },
  {
    id: "cold-leads",
    title: "[PLACEHOLDER] Old leads going cold",
    description:
      "[PLACEHOLDER] Past inquiries and CRM records sit idle with no reactivation.",
    consequence: "[PLACEHOLDER] Sunk acquisition cost produces zero second chance.",
    category: "Reactivation",
    size: "compact",
  },
  {
    id: "visibility",
    title: "[PLACEHOLDER] Poor pipeline visibility",
    description:
      "[PLACEHOLDER] No clear view of where opportunities stall or leak.",
    consequence: "[PLACEHOLDER] Teams cannot fix what they cannot see.",
    category: "Visibility",
    size: "compact",
  },
];
