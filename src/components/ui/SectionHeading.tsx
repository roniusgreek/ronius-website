type Props = {
  eyebrow?: string;
  heading: string;
  paragraph?: string;
  align?: "center" | "start";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  heading,
  paragraph,
  align = "center",
  light = false,
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-right";
  const textColor = light ? "text-white" : "text-ink";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p dir="ltr" className="font-heading italic text-gold mb-2 text-lg">{eyebrow}</p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold ${textColor}`}>
        {heading}
      </h2>
      {paragraph && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-white/80" : "text-ink/70"}`}>
          {paragraph}
        </p>
      )}
    </div>
  );
}
