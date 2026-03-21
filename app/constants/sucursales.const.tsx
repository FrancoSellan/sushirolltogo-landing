import { Sucursal } from "../models/Sucursal";

export const SUCURSALES: Sucursal[] = [
  {
    id: 1,
    name: "Sucursal Recta Martinolli",
    image: "/sucursal-recta.jpg",
    images: [
      { src: "/hero-carrusel-fotos/foto-cuchillo-sushi.jpg", alt: "Foto recta 1" },
      { src: "/hero-carrusel-fotos/foto-feel.jpg", alt: "Foto recta 2" },
      { src: "/foto-del-hero.jpg", alt: "Foto recta 3" },
    ],
    address: "Av. Recta Martinolli 5170",
    phone: "+54 3517 51-6726",
    hours: "Lun–Dom 20:00–23:00",
    badge: "Más enfocada en delivery/take away",
    rating: 4.7,
    mapsUrl: "https://www.google.com/maps/place/Sushi+Roll+To+Go/@-31.3567257,-64.2429501,928m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94329f5c2ffe6c5d:0x5bd7cb7c4d168897!8m2!3d-31.3567257!4d-64.2429501!16s%2Fg%2F11rgf91190?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D",
    menuUrl: "https://drive.google.com/file/d/1uQHUrp8ntXnv6D4-NyIugJfciT936W9R/view",
    tieneDelivery: true
  },
  {
    id: 2,
    name: "Sucursal Luuma Fusión",
    image: "/sucursal-luuma.jpg",
    images: [
      { src: "/hero-carrusel-fotos/foto-delivery.jpg", alt: "Foto luuma 1" },
      { src: "/foto-del-hero.jpg", alt: "Foto luuma 2" },
      { src: "/hero-carrusel-fotos/foto-cuchillo-sushi.jpg", alt: "Foto luuma 3" },
    ],
    address: "Molino de torres 6710",
    phone: "+54 3513 19-0289",
    hours: "Dom–Jue 12:00–00:00 | Vie–Sáb 12:00-00:30",
    badge: "Restaurant",
    rating: 4.8,
    mapsUrl: "https://www.google.com/maps/place/luuma/data=!4m2!3m1!1s0x94329d91b142b659:0xc128ca4aaa5dc69d?sa=X&ved=1t:242&ictx=111",
    menuUrl: "https://menu.fu.do/luumacba/qr-menu",
    tieneDelivery: true
  },
]
