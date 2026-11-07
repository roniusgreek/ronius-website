export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const CONTACT_EMAIL = "rondeo1985@gmail.com";

export const NAV_ITEMS = [
  { label: "דף הבית", href: "/" },
  { label: "אודות", href: "/about/" },
  { label: "סרטוני הופעות", href: "/performances/" },
  { label: "סוגי אירועים", href: "/events/" },
  { label: "המלצות", href: "/testimonials/" },
  { label: "יצירת קשר", href: "/contact/" },
] as const;
