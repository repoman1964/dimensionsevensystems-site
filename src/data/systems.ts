export type Service = {
  id: string;
  name: string;
  problem: string;
  input: string;
  output: string;
  components: string[];
  href: string;
};

export const services: Service[] = [
  {
    id: "websites",
    name: "Websites",
    problem:
      "A clean, fast website that tells customers what you do, where you work, and how to reach you, built to get them to call or book.",
    input: "Little or no online presence",
    output: "A site that brings in calls",
    components: [
      "Mobile-friendly design",
      "Click-to-call",
      "Contact and quote forms",
      "Map listing alignment",
    ],
    href: "/services#websites",
  },
  {
    id: "calls",
    name: "Call handling",
    problem:
      "When you can't pick up, the caller gets a quick reply and you get a clear list of who to call back.",
    input: "Missed call",
    output: "Customer gets a reply",
    components: [
      "Missed-call text back",
      "Call forwarding",
      "Voicemail to text",
      "Callback list",
    ],
    href: "/services#calls",
  },
  {
    id: "scheduling",
    name: "Scheduling & reminders",
    problem:
      "Customers book open times online, and reminders go out automatically so fewer appointments are missed.",
    input: "Phone tag",
    output: "Booked appointment",
    components: [
      "Online booking",
      "Calendar sync",
      "Appointment reminders",
      "Easy rescheduling",
    ],
    href: "/services#scheduling",
  },
  {
    id: "follow-up",
    name: "Customer follow-up",
    problem:
      "Quotes get a check-in, finished jobs get a thank-you and a review request, and nothing depends on remembering.",
    input: "Quote sent or job done",
    output: "Next step happens",
    components: [
      "Quote follow-up",
      "Review requests",
      "Thank-you messages",
      "Seasonal check-ins",
    ],
    href: "/services#follow-up",
  },
  {
    id: "records",
    name: "Customer records",
    problem:
      "One place for customer names, numbers, job history, and notes that you can pull up from your phone.",
    input: "Scattered contacts",
    output: "One organized list",
    components: [
      "Simple CRM setup",
      "Contact import",
      "Job history",
      "Mobile access",
    ],
    href: "/services#records",
  },
  {
    id: "custom",
    name: "Custom tools",
    problem:
      "When an off-the-shelf app doesn't fit how you work, we build a small tool that does.",
    input: "A task nothing handles",
    output: "A tool that fits",
    components: [
      "Discovery call",
      "Custom build",
      "Connections to your apps",
      "Training",
    ],
    href: "/services#custom",
  },
];

export const systemComponents = [
  { id: "website", label: "Website", description: "A clear, mobile-friendly site that turns searches into calls." },
  { id: "phone", label: "Phone & calls", description: "Forwarding, voicemail to text, and quick replies when you miss a call." },
  { id: "booking", label: "Online booking", description: "Let customers pick an open time without a phone call." },
  { id: "reminders", label: "Reminders", description: "Automatic appointment reminders by text or email." },
  { id: "crm", label: "Customer records", description: "One list of customers, contact info, and job history." },
  { id: "invoicing", label: "Quotes & invoices", description: "Send quotes and invoices and take payment online." },
  { id: "reviews", label: "Reviews", description: "Ask happy customers for a review at the right moment." },
  { id: "automation", label: "Automation", description: "Connect your apps so information moves without re-typing." },
  { id: "tools", label: "Custom tools", description: "Small, purpose-built tools when nothing off the shelf fits." },
] as const;

export const journeyStages = [
  { id: "search", label: "Customer searches" },
  { id: "call", label: "Calls or messages" },
  { id: "reply", label: "Gets a reply" },
  { id: "booked", label: "Books a time" },
  { id: "job", label: "Job done" },
  { id: "paid", label: "Paid" },
  { id: "review", label: "Leaves a review" },
] as const;

export const journeyLeaks = [
  { between: ["search", "call"], label: "No website", type: "leak" as const },
  { between: ["call", "reply"], label: "Missed call", type: "leak" as const },
  { between: ["reply", "booked"], label: "Phone tag", type: "leak" as const },
  { between: ["booked", "job"], label: "No-show", type: "leak" as const },
  { between: ["job", "paid"], label: "Slow invoice", type: "leak" as const },
  { between: ["paid", "review"], label: "Never asked", type: "leak" as const },
];

export const processSteps = [
  {
    number: "01",
    title: "Listen",
    description:
      "We talk through how your day actually runs, from the first call to getting paid, and find where time and customers slip away.",
  },
  {
    number: "02",
    title: "Set it up",
    description:
      "We build or configure the tools you need, connect them to what you already use, and keep it as simple as possible.",
  },
  {
    number: "03",
    title: "Show you how",
    description:
      "We walk you through everything, stay available for questions, and adjust as your business changes.",
  },
] as const;
