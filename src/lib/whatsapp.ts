export const WHATSAPP_DISPLAY_NUMBER = "050-4448767";

const WHATSAPP_MESSAGE =
  "היי רוניוס, אשמח לקבל פרטים על הופעה יוונית לאירוע שלי.";

/**
 * wa.me requires the full international number with no leading 0.
 * 050-4448767 -> 972504448767
 */
function toInternational(localNumber: string): string {
  const digitsOnly = localNumber.replace(/\D/g, "");
  const withoutLeadingZero = digitsOnly.replace(/^0/, "");
  return `972${withoutLeadingZero}`;
}

export function buildWaLink(message: string = WHATSAPP_MESSAGE): string {
  const phone = toInternational(WHATSAPP_DISPLAY_NUMBER);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
