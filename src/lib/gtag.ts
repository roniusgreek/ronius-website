export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function pageview(url: string) {
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", "page_view", { page_path: url });
  }
  if (META_PIXEL_ID && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}

export type TrackedEvent =
  | "whatsapp_click"
  | "generate_lead"
  | "video_play"
  | "contact_click";

// שמות אירועים תקניים של Meta (Lead/Contact) נותנים לו אופטימיזציית קמפיינים טובה יותר
// מאשר אירוע מותאם אישית - לכן ממפים אליהם איפה שיש התאמה סמנטית.
const META_STANDARD_EVENTS: Partial<Record<TrackedEvent, string>> = {
  generate_lead: "Lead",
  whatsapp_click: "Contact",
};

export function trackEvent(
  name: TrackedEvent,
  params: Record<string, unknown> = {},
) {
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
  if (META_PIXEL_ID && typeof window.fbq === "function") {
    const metaEvent = META_STANDARD_EVENTS[name];
    if (metaEvent) {
      window.fbq("track", metaEvent, params);
    } else {
      window.fbq("trackCustom", name, params);
    }
  }
}
