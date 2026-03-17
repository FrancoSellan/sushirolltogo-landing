"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(180,80,40,0.15),transparent_60%)]" />

      <section
        className="flex flex-col items-center justify-center overflow-clip px-6 py-10 md:py-0"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="w-full flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto flex-1">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image
                src="/logo.png"
                alt="Sushi Roll To Go logo"
                width={100}
                height={100}
              />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl font-bold mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Sushi Roll To Go
            </motion.h1>

            <motion.p
              className="mt-5 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Frescura, precisión y equilibrio en cada pieza.
            </motion.p>

            <motion.p
              className="mt-3 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Sushi preparado con dedicación para una experiencia simple y
              memorable.
            </motion.p>
          </div>

          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/foto-del-hero.jpg"
              alt="foto-hero"
              width={650}
              height={650}
              className="relative z-10 w-full max-w-lg h-auto rounded-lg object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          className="pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce opacity-60"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </section>
    </main>
  );
}
