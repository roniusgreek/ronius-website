export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function pageview(url: string) {
  if (!GA_ID || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", { page_path: url });
}

export type TrackedEvent =
  | "whatsapp_click"
  | "generate_lead"
  | "video_play"
  | "contact_click";

export function trackEvent(
  name: TrackedEvent,
  params: Record<string, unknown> = {},
) {
  if (!GA_ID || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
