export type ConversionSystem = {
  id: string;
  name: string;
  problem: string;
  input: string;
  output: string;
  components: string[];
  href: string;
};

export const featuredSystems: ConversionSystem[] = [
  {
    id: "lead-response",
    name: "Lead Response System",
    problem: "[PLACEHOLDER] New leads wait too long for a human response.",
    input: "Inbound lead",
    output: "First contact + next step",
    components: [
      "Capture routing",
      "Speed-to-lead alerts",
      "Response scripts",
      "CRM logging",
    ],
    href: "/conversion-systems#lead-response",
  },
  {
    id: "missed-call",
    name: "Missed-Call Recovery System",
    problem: "[PLACEHOLDER] Missed calls never get a structured callback.",
    input: "Missed call event",
    output: "Recovered conversation",
    components: [
      "Missed-call capture",
      "Auto SMS/email",
      "Callback queue",
      "Outcome tracking",
    ],
    href: "/conversion-systems#missed-call",
  },
  {
    id: "appointment",
    name: "Appointment Conversion System",
    problem: "[PLACEHOLDER] Interest does not turn into booked time.",
    input: "Qualified interest",
    output: "Confirmed appointment",
    components: [
      "Booking flow",
      "Calendar sync",
      "Reminders",
      "Confirmation path",
    ],
    href: "/conversion-systems#appointment",
  },
  {
    id: "reactivation",
    name: "Old-Lead Reactivation System",
    problem: "[PLACEHOLDER] Past leads sit unused in the CRM.",
    input: "Dormant lead list",
    output: "Reopened opportunities",
    components: [
      "List hygiene",
      "Reactivation sequence",
      "Offer framing",
      "Reply handling",
    ],
    href: "/conversion-systems#reactivation",
  },
  {
    id: "follow-up",
    name: "Sales Follow-Up System",
    problem: "[PLACEHOLDER] Open deals die from inconsistent follow-up.",
    input: "Open opportunity",
    output: "Sustained sales motion",
    components: [
      "Sequence engine",
      "Task ownership",
      "Stage rules",
      "Pipeline view",
    ],
    href: "/conversion-systems#follow-up",
  },
  {
    id: "custom",
    name: "Custom Conversion System",
    problem: "[PLACEHOLDER] Unique leak that off-the-shelf tools miss.",
    input: "Diagnosed bottleneck",
    output: "Purpose-built fix",
    components: [
      "Discovery",
      "Custom tooling",
      "Integrations",
      "Measurement",
    ],
    href: "/conversion-systems#custom",
  },
];

export const systemComponents = [
  { id: "pages", label: "Conversion pages", description: "Pages built around one job: getting the prospect to take the next step." },
  { id: "capture", label: "Lead capture", description: "Forms, calls, and opt-ins that make sure an interested prospect actually enters the system." },
  { id: "calls", label: "Call handling", description: "Answer incoming calls, recover missed ones, and make sure high-intent prospects don't disappear." },
  { id: "sequences", label: "Follow-up sequences", description: "Calls, texts, and emails that keep working the lead until there's a clear outcome." },
  { id: "booking", label: "Appointment booking", description: "Make it easy for interested prospects to book, and harder for the appointment to fall apart afterward." },
  { id: "reactivation", label: "Lead reactivation", description: "Put old leads and forgotten opportunities back into active conversations." },
  { id: "pipelines", label: "Sales pipelines", description: "Keep every opportunity visible, assigned, and moving toward a clear next step." },
  { id: "tracking", label: "Conversion tracking", description: "See where opportunities are dropping out, where they're getting stuck, and what needs fixing." },
  { id: "tools", label: "Custom sales tools", description: "When off-the-shelf tools don't solve the problem, we build the tool that does." },
] as const;

export const journeyStages = [
  { id: "generated", label: "Lead Generated" },
  { id: "captured", label: "Captured" },
  { id: "contacted", label: "Contacted" },
  { id: "followed-up", label: "Followed Up" },
  { id: "booked", label: "Booked" },
  { id: "conversation", label: "Sales Conversation" },
  { id: "closed", label: "Closed" },
] as const;

export const journeyLeaks = [
  { between: ["generated", "captured"], label: "Missed call / form", type: "leak" as const },
  { between: ["captured", "contacted"], label: "Slow response", type: "leak" as const },
  { between: ["contacted", "followed-up"], label: "No follow-up", type: "leak" as const },
  { between: ["followed-up", "booked"], label: "Booking friction", type: "leak" as const },
  { between: ["booked", "conversation"], label: "No-show", type: "leak" as const },
  { between: ["conversation", "closed"], label: "Deal lost", type: "leak" as const },
];

export const processSteps = [
  {
    number: "01",
    title: "Find the leaks",
    description:
      "We follow what happens from the moment a lead comes in and identify where prospects stall, disappear, or get ignored.",
  },
  {
    number: "02",
    title: "Build what's missing.",
    description:
      "We build the pages, follow-up, booking flows, pipelines, or tools needed to close the gaps.",
  },
  {
    number: "03",
    title: "Connect the system.",
    description:
      "We tie the pieces into your existing sales process so opportunities keep moving instead of falling through the cracks.",
  },
] as const;
