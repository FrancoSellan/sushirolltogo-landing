"use client";

import { motion } from "framer-motion";
import { Producto } from "@/app/models/Producto";
import CategoriaHeader from "./categoria-header";

type ProductosProps = {
  categoria?: string;
  productos: Producto[];
};

export default function Productos({ categoria, productos }: ProductosProps) {
  return (
    <section>
      {categoria && <CategoriaHeader titulo={categoria} />}

      <div className="flex flex-col divide-y divide-zinc-800/80">
        {productos.map((producto, index) => (
          <motion.div
            key={producto.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true }}
            className="flex items-start justify-between gap-4 py-4"
          >
            <div className="min-w-0">
              <h3 className="font-medium tracking-wide text-gray-100">
                {producto.nombre}
              </h3>
              {producto.descripcion && (
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {producto.descripcion}
                </p>
              )}
            </div>
            <span className="shrink-0 font-semibold tabular-nums text-amber-400">
              ${producto.precio.toLocaleString("es-AR")}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
