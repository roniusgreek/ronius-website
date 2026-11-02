"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className,
  from = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "up" | "start";
}) {
  const initial =
    from === "start" ? { opacity: 0, x: 28 } : { opacity: 0, y: 24 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
