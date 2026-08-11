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
  { id: "pages", label: "Conversion pages", description: "[PLACEHOLDER] Pages built to move a prospect to the next step." },
  { id: "capture", label: "Lead capture", description: "[PLACEHOLDER] Forms, calls, and opt-ins that actually route." },
  { id: "calls", label: "Call handling", description: "[PLACEHOLDER] Answer, miss, and recover with intent." },
  { id: "sequences", label: "Follow-up sequences", description: "[PLACEHOLDER] Multi-touch paths that do not forget." },
  { id: "booking", label: "Appointment booking", description: "[PLACEHOLDER] Friction-light calendar conversion." },
  { id: "reactivation", label: "Lead reactivation", description: "[PLACEHOLDER] Second chances for dormant demand." },
  { id: "pipelines", label: "Sales pipelines", description: "[PLACEHOLDER] Stages that match how you actually sell." },
  { id: "tracking", label: "Conversion tracking", description: "[PLACEHOLDER] Visibility into leaks and recovery." },
  { id: "tools", label: "Custom sales tools", description: "[PLACEHOLDER] Purpose-built software when needed." },
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
  { between: ["generated", "captured"], label: "Missed capture", type: "leak" as const },
  { between: ["captured", "contacted"], label: "Slow response", type: "leak" as const },
  { between: ["contacted", "followed-up"], label: "No follow-up", type: "leak" as const },
  { between: ["followed-up", "booked"], label: "No-show risk", type: "warn" as const },
  { between: ["booked", "conversation"], label: "Forgotten lead", type: "leak" as const },
  { between: ["conversation", "closed"], label: "Poor handoff", type: "warn" as const },
];

export const processSteps = [
  {
    number: "01",
    title: "Find the leaks",
    description:
      "[PLACEHOLDER] Map how opportunities move from first signal to sale and locate where they stall or disappear.",
  },
  {
    number: "02",
    title: "Build the missing pieces",
    description:
      "[PLACEHOLDER] Design and ship only the pages, tools, and workflows required to close the gap.",
  },
  {
    number: "03",
    title: "Connect and improve the system",
    description:
      "[PLACEHOLDER] Wire the components together, measure conversion health, and tighten what still leaks.",
  },
] as const;
