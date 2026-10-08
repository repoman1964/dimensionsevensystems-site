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
