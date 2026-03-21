"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { OPINIONES } from "@/app/constants/opiniones.const";

export function Opiniones() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-xs font-semibold mb-3">
          Clientes contentos
        </p>
        <h2 className="text-4xl font-bold tracking-tight">
          Algunas opiniones de ustedes
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {OPINIONES.map((opinion, index) => (
          <motion.div
            key={opinion.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card size="sm" className="h-full flex flex-col bg-zinc-900 border-zinc-800 hover:border-gray-300/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(209,213,219,0.15)]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < opinion.rating ? "text-yellow-400" : "text-gray-300"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <CardTitle className="text-sm font-semibold text-white">{opinion.nombre}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed line-clamp-6 text-white">
                  &quot;{opinion.descripcion}&quot;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
