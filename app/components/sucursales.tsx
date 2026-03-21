"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { MapPin, Clock, Phone, Star, Bike } from "lucide-react";
import { SUCURSALES } from "@/app/constants/sucursales.const";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const PEDIDO_URL =
  "https://bio.link/sushiroll?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnGwQUga1PNSKGkP9X9vPznkIzAUOm8c9KKiE2P4ZEbcDpc_oBXH6ak5_ajI4_aem_tW2EtC1mqh80iLBTDvy4TA";

function BranchCarousel({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="relative aspect-4/3 md:aspect-auto md:h-48 overflow-hidden">
      <Carousel plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}>
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i}>
              <div className="relative aspect-4/3 md:aspect-auto md:h-50">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default function Sucursales() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-xs font-semibold mb-3">
          Dónde encontrarnos
        </p>
        <h2 className="text-4xl font-bold tracking-tight">
          Nuestras Sucursales
        </h2>
        <p className="text-zinc-400 mt-3 text-sm max-w-md mx-auto">
          Visitanos en cualquiera de nuestros locales. La misma calidad, el
          mismo sabor.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {SUCURSALES.map((branch, index) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="relative bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-gray-300/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(209,213,219,0.15)]">
              <div className="absolute inset-0 border-[3px] border-zinc-800 rounded-[inherit] pointer-events-none z-50" />
              {/* Image */}
              <div className="relative">
                <BranchCarousel images={branch.images} />
                <Badge className="absolute top-3 right-3 bg-amber-500 text-zinc-950 font-semibold border-0 z-20">
                  {branch.badge}
                </Badge>
              </div>

              {/* Header */}
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-white text-xl leading-tight">
                    {branch.name}
                  </CardTitle>
                  <div className="flex items-center gap-1 shrink-0 mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-amber-400 text-sm font-semibold">
                      {branch.rating}
                    </span>
                  </div>
                </div>
                <CardDescription className="text-zinc-400 space-y-1.5 mt-2">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                    {branch.address}
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                    {branch.phone}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                    {branch.hours}
                  </span>
                  {branch.tieneDelivery && (
                    <span className="flex items-center gap-2">
                      <Bike className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                      Incluye delivery
                    </span>
                  )}
                </CardDescription>
              </CardHeader>

              {/* Footer */}
              <CardFooter className="pt-2 gap-2">
                <Button
                  className="flex-1 bg-gray-300 hover:bg-gray-500 text-zinc-950 font-semibold"
                  onClick={() => window.open(`${branch.menuUrl}`)}
                >
                  Menú
                </Button>
                <Button
                  className="flex-1 bg-gray-300 hover:bg-gray-500 text-zinc-950 font-semibold"
                  onClick={() => window.open(branch.mapsUrl, "_blank")}
                >
                  Cómo llegar
                </Button>
                <Button
                  className="flex-1 bg-gray-300 hover:bg-gray-500 text-zinc-950 font-semibold"
                  onClick={() => window.open(PEDIDO_URL, "_blank")}
                >
                  Hacé tu pedido ó reservá
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
