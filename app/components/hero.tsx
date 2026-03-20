"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";

const TOTAL_SLIDES = 5;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  function handleSetApi(api: CarouselApi) {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }

  return (
    <main>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(180,80,40,0.15),transparent_60%)]" />

      <section
        className="flex flex-col items-center justify-center overflow-clip px-6 py-10 md:py-0"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="w-full flex flex-col md:flex-row items-center gap-10 flex-1">
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

            <motion.p
              className="mt-3 text-sm md:text-base border border-gray-400/30 rounded-2xl px-4 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam debitis, consectetur illo laboriosam quaerat molestias quasi expedita dicta quibusdam, amet consequatur numquam velit voluptates, qui eveniet atque similique maiores pariatur.
            </motion.p>
          </div>

          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full max-w-xs sm:max-w-2xl md:max-w-3xl">
            <Carousel className="w-full" setApi={handleSetApi}>
              <CarouselContent>
                <CarouselItem>
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                    <Image
                      src="/foto-del-hero.jpg"
                      alt="Foto sushi 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                    <Image
                      src="/foto-del-hero.jpg"
                      alt="Foto sushi 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                    <Image
                      src="/foto-del-hero.jpg"
                      alt="Foto sushi 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                    <Image
                      src="/foto-del-hero.jpg"
                      alt="Foto sushi 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                    <Image
                      src="/foto-del-hero.jpg"
                      alt="Foto sushi 5"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
            <div className="flex justify-center gap-2 mt-3 mb-1">
              {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-4 bg-gray-300" : "w-1.5 bg-gray-500"
                  }`}
                />
              ))}
            </div>
            </div>
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
