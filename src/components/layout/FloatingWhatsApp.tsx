"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { buildWaLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/gtag";
import WhatsAppIcon from "@/components/ui/icons/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // רק בדף הבית מוסתר בתחילה: ה-Hero שם כבר מכיל כפתור וואטסאפ משלו שנוחת
  // בדיוק באותה פינה תחתונה במסכי מובייל אמיתיים (בניגוד ל-viewport של הדפדפן הראשי בבדיקות).
  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    if (!isHome) return;
    function handleScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <a
      href={buildWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
      aria-label="שלחו הודעה בוואטסאפ"
      // מיקום פיזי (left) ולא לוגי (start) בכוונה: תחת dir="rtl", start היה מתהפך לימין.
      className={`fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
}
