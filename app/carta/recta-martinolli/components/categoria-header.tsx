"use client";

import { motion } from "framer-motion";

type CategoriaHeaderProps = {
  titulo: string;
  size?: "lg" | "sm";
};

export default function CategoriaHeader({
  titulo,
  size = "lg",
}: CategoriaHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={
        size === "lg"
          ? "mb-6 flex items-center gap-4"
          : "mb-4 flex items-center gap-3"
      }
    >
      <h2
        className={
          size === "lg"
            ? "whitespace-nowrap text-xl font-bold uppercase tracking-[0.15em] text-white md:text-2xl"
            : "whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90"
        }
      >
        {titulo}
      </h2>
      <div
        className={
          size === "lg"
            ? "h-px flex-1 bg-linear-to-r from-amber-500/50 to-zinc-800"
            : "h-px flex-1 bg-zinc-800"
        }
      />
    </motion.div>
  );
}
