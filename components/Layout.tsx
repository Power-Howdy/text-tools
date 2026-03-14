"use client";

import Link from "next/link";
import { Toaster } from "sonner";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-warm-200 dark:border-warm-800 bg-warm-50/80 dark:bg-warm-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-warm-900 dark:text-warm-50 hover:text-accent transition-colors"
          >
            TextTools
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-warm-600 dark:text-warm-400 hover:text-accent transition-colors"
            >
              All Tools
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
