"use client";

import { useState, type FormEvent } from "react";
import { contact, EVENT_TYPE_OPTIONS } from "@/content/copy";
import { trackEvent } from "@/lib/gtag";

type Status = "idle" | "submitting" | "success" | "error";
type Variant = "full" | "compact";
type Theme = "light" | "dark";

export default function ContactForm({
  variant = "full",
  theme = "light",
}: {
  variant?: Variant;
  theme?: Theme;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const isDark = theme === "dark";

  const fieldClass = isDark
    ? "w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none transition-colors focus:border-gold"
    : "w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-ink placeholder-ink/40 outline-none transition-colors focus:border-navy";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `פנייה חדשה מהאתר של רוניוס: ${data.name}`,
          from_name: "אתר רוניוס חג'ידאקיס",
          ...data,
        }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error("request failed");

      trackEvent("generate_lead", {
        variant,
        event_type: String(data.eventType ?? ""),
      });

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-xl border px-6 py-8 text-center ${
          isDark ? "border-white/20 text-white" : "border-ink/15 text-ink"
        }`}
      >
        <p className="text-lg font-semibold">{contact.successTitle}</p>
        <p className={`mt-2 ${isDark ? "text-white/70" : "text-ink/70"}`}>
          {contact.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-right">
      <input
        name="name"
        type="text"
        required
        placeholder={contact.fields.name}
        className={fieldClass}
      />
      <input
        name="phone"
        type="tel"
        required
        dir="ltr"
        placeholder={contact.fields.phone}
        className={`${fieldClass} text-right`}
      />

      {variant === "full" && (
        <input
          name="email"
          type="email"
          dir="ltr"
          placeholder={contact.fields.email}
          className={`${fieldClass} text-right`}
        />
      )}

      <select
        name="eventType"
        required
        defaultValue=""
        className={`${fieldClass} ${isDark ? "[color-scheme:dark]" : ""}`}
      >
        <option value="" disabled>
          {contact.fields.eventType}
        </option>
        {EVENT_TYPE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {variant === "full" && (
        <>
          <input
            name="eventDate"
            type="date"
            placeholder={contact.fields.eventDate}
            className={`${fieldClass} ${isDark ? "[color-scheme:dark]" : ""}`}
          />
          <textarea
            name="message"
            rows={4}
            placeholder={contact.fields.message}
            className={fieldClass}
          />
        </>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[44px] w-full rounded-lg bg-gold px-8 py-3 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-gold/90 disabled:opacity-60"
      >
        {status === "submitting" ? "שולח..." : contact.submit}
      </button>

      {status === "error" && (
        <p className={isDark ? "text-sm text-red-300" : "text-sm text-red-600"}>
          {contact.errorMessage}
        </p>
      )}

      <p className={`text-xs ${isDark ? "text-white/50" : "text-ink/50"}`}>
        {contact.privacyNote}
      </p>
    </form>
  );
}
