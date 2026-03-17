"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";

export default function Navbar() {
  return (
    <header className="w-full bg-transparent">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-end px-6">
        <Menubar className="border-none shadow-none">
          <div>
            <MenubarMenu>
              <MenubarTrigger>Inicio</MenubarTrigger>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger>Menú</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Combos</MenubarItem>
                <MenubarItem>Piezas especiales</MenubarItem>
                <MenubarItem>Bebidas</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger>Sucursales</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Córdoba Centro</MenubarItem>
                <MenubarItem>Nueva Córdoba</MenubarItem>
              </MenubarContent>
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
