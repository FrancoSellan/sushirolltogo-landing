"use client";

import { motion } from "framer-motion";
import { COMBINADOS_RECTA_MARTINOLLI as combinados } from "@/app/constants/productos/recta-martinolli";

export default function Combinados() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-6 flex items-center gap-4"
      >
        <h2 className="whitespace-nowrap text-xl font-bold uppercase tracking-[0.15em] text-white md:text-2xl">
          Combinados
        </h2>
        <div className="h-px flex-1 bg-linear-to-r to-zinc-800" />
      </motion.div>

      <div className="flex flex-col divide-y divide-zinc-800/80">
        {combinados.map((combinado, index) => (
          <motion.div
            key={combinado.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true }}
            className="py-4"
          >
            <h3 className="font-medium tracking-wide text-zinc-300">
              {combinado.nombre}
            </h3>
            {combinado.descripcion && (
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                {combinado.descripcion}
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {combinado.tipo.map((tipo) => (
                <span
                  key={tipo.cantidadPiezas}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs"
                >
                  <span className="text-zinc-500">
                    {tipo.cantidadPiezas} piezas
                  </span>
                  <span className="font-semibold tabular-nums text-zinc-300">
                    ${tipo.precio.toLocaleString("es-AR")}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
