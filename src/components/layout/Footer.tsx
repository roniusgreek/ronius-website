import Image from "next/image";
import { NAV_ITEMS, CONTACT_EMAIL } from "@/lib/site";
import { WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-navy py-12 text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-4 text-center sm:px-6">
        <Image
          src="/images/logo.png"
          alt="רוניוס חג'ידאקיס"
          width={140}
          height={56}
          className="h-10 w-auto brightness-0 invert"
        />

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-white/60" dir="ltr">
          {WHATSAPP_DISPLAY_NUMBER} · {CONTACT_EMAIL}
        </p>

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} רוניוס חג&apos;ידאקיס - זמר יווני ונגן בוזוקי לאירועים
        </p>
      </div>
    </footer>
  );
}
