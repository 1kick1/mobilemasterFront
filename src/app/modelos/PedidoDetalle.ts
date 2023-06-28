import { Producto } from "./Producto";

export class PedidoDetalle{
    cantidad: number;
    idDetalle: number;
    importe: number;
    preciovta: number;
    producto!: Producto;

    constructor(){
        this.cantidad=0;
        this.idDetalle=0;
        this.importe=0;
        this.preciovta=0;
    }
}