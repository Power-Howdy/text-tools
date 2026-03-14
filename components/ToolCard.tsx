"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";

export type Tool = {
  name: string;
  slug: string;
  description: string;
  icon: string;
};

export function ToolCard({
  tool,
  index,
}: {
  tool: Tool;
  index?: number;
}) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <Card className="p-5 h-full block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (index ?? 0) * 0.05 }}
          className="flex flex-col gap-3"
        >
          <span
            className="text-2xl"
            role="img"
            aria-hidden
          >
            {tool.icon}
          </span>
          <h3 className="font-semibold text-warm-900 dark:text-warm-50 text-lg">
            {tool.name}
          </h3>
          <p className="text-sm text-warm-600 dark:text-warm-400 flex-1">
            {tool.description}
          </p>
          <span className="text-accent text-sm font-medium">Use tool →</span>
        </motion.div>
      </Card>
    </Link>
  );
}
