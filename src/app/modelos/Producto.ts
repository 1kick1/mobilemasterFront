import { Marca } from "./Marca";

export class Producto {
    idProducto: number;
    marca!: Marca;
    descripcion: string;
    stock: number;
    precio: number;

    constructor() {
        this.idProducto = 0;
        this.descripcion = "";
        this.stock = 0;
        this.precio = 0;
    }
}