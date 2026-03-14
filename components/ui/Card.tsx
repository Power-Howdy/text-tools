"use client";

import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      className={`rounded-xl border border-warm-200 dark:border-warm-800 bg-white dark:bg-warm-900/50 shadow-sm hover:shadow-md transition-shadow ${className}`}
      whileHover={{ y: -2 }}
    >
      {children}
    </motion.div>
  );
}
