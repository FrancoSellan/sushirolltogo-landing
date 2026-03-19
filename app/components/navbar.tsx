"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/app/components/ui/menubar";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  return (
    <header className="w-full bg-transparent">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6">
        <Menubar className="border-none shadow-none">
          <div>
            <MenubarMenu>
              <MenubarTrigger onClick={() => scrollTo("inicio")}>Inicio</MenubarTrigger>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger>Menú</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Sucursal Recta Martinolli</MenubarItem>
                <MenubarItem>Sucursal Luuma</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger onClick={() => scrollTo("sucursales")}>Sucursales</MenubarTrigger>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger onClick={() => scrollTo("opiniones")}>Opiniones</MenubarTrigger>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger>Contacto</MenubarTrigger>
            </MenubarMenu>
          </div>
        </Menubar>
      </div>
    </header>
  );
}
