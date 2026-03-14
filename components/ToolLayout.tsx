"use client";

import { motion } from "framer-motion";

type ToolLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-warm-900 dark:text-warm-50 mb-2">
            {title}
          </h1>
          <p className="text-warm-600 dark:text-warm-400">{description}</p>
        </header>
        {children}
      </motion.article>
    </div>
  );
}
