/**
 * Minimal client behavior: header scroll, mobile nav, FAQ accordion, analytics hooks.
 * Respects prefers-reduced-motion (handled mostly in CSS).
 */

type AnalyticsPayload = {
  event: string;
  label?: string;
  href?: string;
};

function track(payload: AnalyticsPayload) {
  // Analytics-ready hook; provider not installed yet
  const w = window as Window & { dataLayer?: unknown[]; d7Analytics?: AnalyticsPayload[] };
  w.d7Analytics = w.d7Analytics || [];
  w.d7Analytics.push(payload);
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: payload.event, ...payload });
  if (import.meta.env.DEV) {
    console.debug("[d7:analytics]", payload);
  }
}

function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = header.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-mobile-nav]");
  if (!toggle || !panel) return;

  const setOpen = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    panel.hidden = !open;
    header.classList.toggle("is-menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  panel.querySelectorAll("[data-menu-close]").forEach((el) => {
    el.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function initFaq() {
  document.querySelectorAll<HTMLButtonElement>("[data-faq-trigger]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const panelId = btn.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;

      // Close siblings in same accordion
      const root = btn.closest(".faq");
      if (root) {
        root.querySelectorAll<HTMLButtonElement>("[data-faq-trigger]").forEach((other) => {
          if (other === btn) return;
          other.setAttribute("aria-expanded", "false");
          const oid = other.getAttribute("aria-controls");
          const op = oid ? document.getElementById(oid) : null;
          if (op) op.hidden = true;
        });
      }

      btn.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;

      if (!expanded) {
        track({
          event: "faq_opened",
          label: btn.dataset.analyticsLabel,
        });
      }
    });
  });
}

function initAnalyticsClicks() {
  document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-analytics]");
    if (!target) return;
    const event = target.dataset.analytics;
    if (!event) return;
    track({
      event,
      label: target.dataset.analyticsLabel,
      href: target instanceof HTMLAnchorElement ? target.href : undefined,
    });
  });
}

function initCountUp() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = document.querySelectorAll<HTMLElement>("[data-count-up]");
  if (!nodes.length) return;

  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.target || el.textContent || 0);
    if (reduce || Number.isNaN(target)) {
      el.textContent = String(target);
      return;
    }
    const duration = 900;
    const start = performance.now();
    const from = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(from + (target - from) * eased));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(run);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run(entry.target as HTMLElement);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.4 },
  );
  nodes.forEach((n) => io.observe(n));
}

function init() {
  initHeader();
  initFaq();
  initAnalyticsClicks();
  initCountUp();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
