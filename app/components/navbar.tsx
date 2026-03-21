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
              <MenubarTrigger onClick={() => scrollTo("inicio")}>
                Inicio
              </MenubarTrigger>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger>Menú</MenubarTrigger>
              <MenubarContent>
                <MenubarItem asChild>
                  <a href="https://drive.google.com/file/d/1uQHUrp8ntXnv6D4-NyIugJfciT936W9R/view" target="_blank" rel="noopener noreferrer">Sucursal Recta Martinolli</a>
                </MenubarItem>
                <MenubarItem asChild>
                  <a href="https://menu.fu.do/luumacba/qr-menu" target="_blank" rel="noopener noreferrer">Sucursal Luuma</a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger onClick={() => scrollTo("sucursales")}>
                Sucursales
              </MenubarTrigger>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger onClick={() => scrollTo("opiniones")}>
                Opiniones
              </MenubarTrigger>
            </MenubarMenu>
          </div>
          <div className="ml-3">
            <MenubarMenu>
              <MenubarTrigger>
                <a
                  href="https://www.instagram.com/sushiroll_to_go/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.5"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
              </MenubarTrigger>
            </MenubarMenu>
          </div>
        </Menubar>
      </div>
    </header>
  );
}
