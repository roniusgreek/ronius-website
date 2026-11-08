import type { Metadata } from "next";
import { privacyPolicy, seo } from "@/content/copy";
import LegalSections from "@/components/legal/LegalSections";

export const metadata: Metadata = {
  title: seo.privacy.title,
  description: seo.privacy.description,
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return <LegalSections {...privacyPolicy} />;
}
