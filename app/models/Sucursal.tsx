export type Sucursal = {
  id: number
  name: string
  image: string
  images: { src: string; alt: string }[]
  address: string
  phone?: string
  hours: string
  badge: string
  rating: number
  mapsUrl: string
  menuUrl: string
  tieneDelivery: boolean
}