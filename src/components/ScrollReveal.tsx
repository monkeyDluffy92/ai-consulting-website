"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  yOffset?: number;
}

export default function ScrollReveal({ children, width = "100%", delay = 0, yOffset = 50 }: ScrollRevealProps) {
  return (
    <div style={{ width, position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} // smooth, architectural easing
      >
        {children}
      </motion.div>
    </div>
  );
}
