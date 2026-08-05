import { ENTRADAS_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/entradas.const";
import Productos from "./components/productos";
import Combinados from "./components/combinados";
import {
  NIGIRIS_RECTA_MARTINOLLI,
  EXTRAS_RECTA_MARTINOLLI,
  PRINCIPALES_RECTA_MARTINOLLI,
  GOHAN_RECTA_MARTINOLLI,
  GEISHAS_RECTA_MARTINOLLI,
  ROLLS_PREMIUM_RECTA_MARTINOLLI,
  SASHIMI_RECTA_MARTINOLLI,
  ROLLS_RECTA_MARTINOLLI,
  ROLLS_CALIENTES_RECTA_MARTINOLLI,
  ROLLS_VEGETARIANOS_RECTA_MARTINOLLI,
  SIN_ALGA_NORI_RECTA_MARTINOLLI,
} from "@/app/constants/productos/recta-martinolli";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoriaHeader from "./components/categoria-header";
import Image from "next/image";

export default function Carta() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-16 md:py-20">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Image
            src="/logo.png"
            alt="Sushi Roll To Go logo"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <h1 className="mb-3 text-5xl font-bold uppercase md:text-5xl">
            MENÚ
          </h1>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-16">
          <section className="flex flex-col gap-10">
            <Productos
              categoria="Entradas"
              productos={ENTRADAS_RECTA_MARTINOLLI}
            />

            <div className="flex flex-col gap-8 border-l border-zinc-800 pl-6">
              <div>
                <CategoriaHeader titulo="Sashimi" size="sm" />
                <Productos productos={SASHIMI_RECTA_MARTINOLLI} />
              </div>
              <div>
                <CategoriaHeader titulo="Geishas" size="sm" />
                <Productos productos={GEISHAS_RECTA_MARTINOLLI} />
              </div>
              <div>
                <CategoriaHeader titulo="Nigiris" size="sm" />
                <Productos productos={NIGIRIS_RECTA_MARTINOLLI} />
              </div>
            </div>
          </section>

          <Combinados />

          <Productos
            categoria="Sushi Rolls"
            productos={ROLLS_RECTA_MARTINOLLI}
          />
          <Productos
            categoria="Sushi Rolls Calientes"
            productos={ROLLS_CALIENTES_RECTA_MARTINOLLI}
          />
          <Productos
            categoria="Vegetarianos"
            productos={ROLLS_VEGETARIANOS_RECTA_MARTINOLLI}
          />
          <Productos
            categoria="Sin Alga Nori"
            productos={SIN_ALGA_NORI_RECTA_MARTINOLLI}
          />
          <Productos
            categoria="Sushi Rolls Premium"
            productos={ROLLS_PREMIUM_RECTA_MARTINOLLI}
          />
          <Productos
            categoria="Gohan & Principales"
            productos={[
              ...GOHAN_RECTA_MARTINOLLI,
              ...PRINCIPALES_RECTA_MARTINOLLI,
            ]}
          />
          <Productos categoria="Extras" productos={EXTRAS_RECTA_MARTINOLLI} />
        </div>
      </main>

      <Footer />
    </>
  );
}
