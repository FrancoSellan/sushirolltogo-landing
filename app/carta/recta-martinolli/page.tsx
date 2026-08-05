import { ENTRADAS_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/entradas.const";
import Productos from "./components/productos";
import Combinados from "./components/combinados";
import { GEISHAS_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/geishas.const";
import { SASHIMI_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/sashimi.const";
import { NIGIRIS_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/nigiris.const";
import { ROLLS_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/rolls.const";
import { ROLLS_CALIENTES_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/rolls-calientes.const";
import { ROLLS_VEGETARIANOS_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/rolls-vegetarianos.const";
import { SIN_ALGA_NORI_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/sin-alga-nori.const";
import { ROLLS_PREMIUM_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/rolls-premium.const";
import { GOHAN_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/gohan.const";
import { PRINCIPALES_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/principales.const";
import { EXTRAS_RECTA_MARTINOLLI } from "@/app/constants/productos/recta-martinolli/extras.const";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoriaHeader from "./components/categoria-header";

export default function Carta() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-16 md:py-20">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/80">
            Sushi Roll To Go
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Carta Recta Martinolli
          </h1>
          <div className="mx-auto mt-5 h-px w-16 bg-amber-500/60" />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-16">
          <section className="flex flex-col gap-10">
            <Productos categoria="Entradas" productos={ENTRADAS_RECTA_MARTINOLLI} />

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

          <Productos categoria="Sushi Rolls" productos={ROLLS_RECTA_MARTINOLLI} />
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
            productos={[...GOHAN_RECTA_MARTINOLLI, ...PRINCIPALES_RECTA_MARTINOLLI]}
          />
          <Productos categoria="Extras" productos={EXTRAS_RECTA_MARTINOLLI} />
        </div>
      </main>

      <Footer />
    </>
  );
}
