export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "what-we-do",
    question: "What does Dimension Seven Systems do?",
    answer:
      "We help small businesses use technology in their daily operations: websites, call handling, online booking, reminders, customer records, follow-up, and simple automation. We set it up, connect it to what you already use, and show you how it works.",
  },
  {
    id: "tech-skills",
    question: "Do I need to be good with technology?",
    answer:
      "No. That's the point. We handle the setup and keep things simple enough to use from your phone.",
  },
  {
    id: "existing-tools",
    question: "Can you work with the tools I already use?",
    answer:
      "Usually, yes. If your calendar, invoicing app, or phone system works for you, we connect to it instead of replacing it.",
  },
  {
    id: "build-websites",
    question: "Do you build websites?",
    answer:
      "Yes. Many of the businesses we work with start with a website, especially if they don't have one yet.",
  },
  {
    id: "timeline",
    question: "How long does setup take?",
    answer:
      "A website or a single tool can often be ready in days. Larger projects that connect several tools take longer, and we'll give you a timeline up front.",
  },
  {
    id: "pricing",
    question: "How is pricing structured?",
    answer:
      "Pricing depends on what you need. After a short conversation, we give you a clear quote before any work starts.",
  },
  {
    id: "support",
    question: "What if something stops working?",
    answer:
      "Call, text, or email us. We support what we set up.",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    id: "contact-who",
    question: "Who do you work with?",
    answer:
      "Small, owner-operated businesses, especially trades, home services, and appointment-based businesses, that want technology to save them time.",
  },
  {
    id: "contact-prep",
    question: "What should I have ready?",
    answer:
      "Nothing special. A rough idea of how you handle calls, scheduling, and customers today is enough to start.",
  },
  {
    id: "contact-cost",
    question: "Does the first conversation cost anything?",
    answer:
      "No. The first conversation is free, and there's no obligation.",
  },
];
