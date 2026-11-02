"use client";

import { buildWaLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/gtag";
import WhatsAppIcon from "@/components/ui/icons/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
      aria-label="שלחו הודעה בוואטסאפ"
      // מיקום פיזי (left) ולא לוגי (start) בכוונה: תחת dir="rtl", start היה מתהפך לימין.
      className="fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
}
