import type { APIRoute } from "astro";

// Old per-prospect walkthrough links from the previous site. Landers now live on callcatcher.site.
export const prerender = false;

export const GET: APIRoute = ({ redirect }) => redirect("/", 301);
