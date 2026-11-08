import type { Metadata } from "next";
import { accessibilityStatement, seo } from "@/content/copy";
import LegalSections from "@/components/legal/LegalSections";

export const metadata: Metadata = {
  title: seo.accessibility.title,
  description: seo.accessibility.description,
  alternates: { canonical: "/accessibility/" },
};

export default function AccessibilityPage() {
  return <LegalSections {...accessibilityStatement} />;
}
