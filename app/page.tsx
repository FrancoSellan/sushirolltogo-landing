import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import Sucursales from "./components/sucursales";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sucursales />
    </>
  );
}
