export class Propiedad {
  _id?: number;
  ubicacion: string;
  direccion: string;
  precio: number;
  descripcion: string;

  constructor(
    nombre: string,
    categoria: string,
    descripcion: string,
    precio: number
  ) {
    this.ubicacion = nombre;
    this.direccion = categoria;
    this.precio = precio;
    this.descripcion = descripcion;
  }
}
