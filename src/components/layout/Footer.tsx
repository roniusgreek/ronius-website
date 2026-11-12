import Image from "next/image";
import { NAV_ITEMS, LEGAL_LINKS, SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/site";
import { WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import TikTokIcon from "@/components/ui/icons/TikTokIcon";

const SOCIAL_ICONS = {
  פייסבוק: FacebookIcon,
  אינסטגרם: InstagramIcon,
  טיקטוק: TikTokIcon,
} as const;

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

        <div className="flex items-center justify-center gap-3">
          {SOCIAL_LINKS.map((item) => {
            const Icon = SOCIAL_ICONS[item.label];
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-white/60" dir="ltr">
          {WHATSAPP_DISPLAY_NUMBER} · {CONTACT_EMAIL}
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-4">
          {LEGAL_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="text-xs text-white/50 hover:text-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} רוניוס חג&apos;ידאקיס - זמר יווני ונגן בוזוקי לאירועים
        </p>
      </div>
    </footer>
  );
}
