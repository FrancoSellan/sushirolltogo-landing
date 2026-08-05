type tipoCombinado = {
  cantidadPiezas: number;
  precio: number;
};

export type Combinado = {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: tipoCombinado[];
  imagen: string;
};
