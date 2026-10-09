/**
 * Video walkthrough pages, served at /v/{slug}. These are the links texted to
 * business owners who asked for a walkthrough on a call (see /sms).
 * Add one entry per prospect; the slug becomes the URL.
 */

export type Walkthrough = {
  slug: string;
  firstName: string;
  businessName: string;
  city: string;
  videoSrc: string;
  poster?: string;
  durationLabel: string;
  /** Live preview of the site we built, if one is deployed. */
  previewUrl?: string;
  chapters: string[];
  /** Fictional demo shown to carriers and visitors as an example. */
  sample?: boolean;
};

/**
 * Short videos shown in the sidebar of every walkthrough page, each focused on
 * one part of a high-converting website. Leave videoSrc empty to show a
 * "coming soon" placeholder card.
 */
export type GalleryVideo = {
  title: string;
  summary: string;
  videoSrc?: string;
  poster?: string;
  durationLabel?: string;
};

export const galleryVideos: GalleryVideo[] = [
  {
    title: "A headline that says what you do and where",
    summary: "Why visitors decide in a few seconds whether to stay.",
  },
  {
    title: "Click-to-call and a quote form up top",
    summary: "Making it effortless for a ready customer to reach you.",
  },
  {
    title: "Reviews and trust signals that close the deal",
    summary: "Turning happy customers into proof for new ones.",
  },
  {
    title: "A page for every service you offer",
    summary: "How service pages help you show up on Google.",
  },
  {
    title: "Never lose a lead to a missed call",
    summary: "Automatic text-back when you can't pick up the phone.",
  },
];

export const walkthroughs: Walkthrough[] = [
  {
    slug: "sample",
    firstName: "Alex",
    businessName: "Sweet Tea Cleaning Co.",
    city: "Decatur, GA",
    videoSrc: "/walkthroughs/sample.mp4",
    poster: "/walkthroughs/sample-poster.jpg",
    durationLabel: "under a minute",
    chapters: [
      "The top of the page: headline, phone number, and quote form",
      "Services, reviews, and service areas",
      "A page for each service",
      "How the site looks and works on a phone",
      "How customers reach you when you miss a call",
    ],
    sample: true,
  },
];
