import { Cliente } from "./Cliente";
import { PedidoDetalle } from "./PedidoDetalle";

export class Pedido{
    idPedido: number;
    fechaPedido: string;
    cliente!: Cliente;
    pedidoDetalleDTO!:PedidoDetalle[];
    importeVta?: number;

    constructor(){
        this.idPedido=0;
        this.fechaPedido="";
        
    }
}