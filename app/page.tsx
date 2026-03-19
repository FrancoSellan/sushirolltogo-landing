import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import Sucursales from "./components/sucursales";
import { Opiniones } from "./components/opiniones";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="inicio"><Hero /></div>
      <div id="sucursales"><Sucursales /></div>
      <div id="opiniones"><Opiniones /></div>
    </>
  );
}
