import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Cliente';
import { Pedido } from 'src/app/modelos/Pedido';
import { PedidoDetalle } from 'src/app/modelos/PedidoDetalle';
import { Producto } from 'src/app/modelos/Producto';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { PedidoService } from 'src/app/servicio/pedido.service';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})
export class AddPedidoComponent implements OnInit {

  listaProductos: Producto[] = [];
  productoSelected: Producto = new Producto();
  flgSelectedProducto: boolean = true;
  pedidoDetalle: PedidoDetalle = new PedidoDetalle();
  listaPedidoDetalle: PedidoDetalle[] = [];
  listaClientes: Cliente[] = [];
  pedido = new Pedido();

  constructor(
    private _clienteService: ClienteService,
    private _productoService: ProductoService,
    private _pedidoService: PedidoService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerListaProductos();
    this.obtenerListaClientes();
  }

  obtenerListaProductos(): void {
    this._productoService.getProductos().subscribe({
      next: (listaProductos: Producto[]) => {
        this.listaProductos = listaProductos;
      },
      error: (error: any) => {
        alert(error);
      }
    });
  }

  onSelectProduct(event: any): void {
    this.flgSelectedProducto = false;
    let idProduct = event.target.value as number;
    this._productoService.getProductoId(idProduct).subscribe({
      next: (producto: Producto) => {
        this.productoSelected = producto;
        this.pedidoDetalle.cantidad = 0;
        this.pedidoDetalle.importe = 0;
      },
    });
  }

  onSelectCantidad(event: any): void {
    let cantidad = event.target.value as number;
    let precio = this.productoSelected.precio as number;
    this.pedidoDetalle.importe = cantidad * precio;
  }

  agregarProductoPedido(): void {
    if(this.pedidoDetalle.cantidad === 0) {
      alert("Seleccione la cantidad de productos");
      return;
    }
    this.pedidoDetalle.preciovta = this.productoSelected.precio;
    this.pedidoDetalle.producto = this.productoSelected;
    let pedidoDetalleRef = new PedidoDetalle();
    let { ...detalle } = this.pedidoDetalle;
    pedidoDetalleRef = detalle;
    this.listaPedidoDetalle.push(pedidoDetalleRef);
    this.pedidoDetalle.cantidad = 0;
    this.pedidoDetalle.importe = 0;
  }

  eliminarProductoPedido(id: number): void {
    this.listaPedidoDetalle = this.listaPedidoDetalle.filter( (x) => x.idDetalle != id);
  }

  obtenerListaClientes(): void {
    this._clienteService.getClientes().subscribe({
      next: (listaClientes: Cliente[]) => {
        this.listaClientes = listaClientes;
      },
      error: (error: any) => {
        alert(error);
      }
    });
  }

  registrarPedido(): void {
    if(this.listaPedidoDetalle.length <= 0) {
      alert("Debe agregar un producto al pedido!");
      return;
    }

    if(this.validarRegistroPedido()) {
      alert("Ingrese el cliente y la fecha de pedido!");
      return;
    }

    this.pedido.pedidoDetalleDTO = this.listaPedidoDetalle;

    this._pedidoService.registrarPedidos(this.pedido).subscribe({
      next: () => {
        alert("Pedido registrado exitosamente");
        this._router.navigate(['/app/pedidos']);
      },
      error: (err: any) => {
        alert(err);
      }
    });
  }

  validarRegistroPedido(): boolean {
    return (this.pedido.idPedido == 0) || (this.pedido.cliente == undefined) || (this.pedido.fechaPedido == "");
  }

  onSelectClient(event: any): void {
    let idCliente = event.target.value as number;
    this._clienteService.getClienteId(idCliente).subscribe({
      next: (cliente: Cliente) => {
        this.pedido.cliente = cliente;
      },
    });
  }

  cancelarPedido(){
    this._router.navigate(['/app/pedidos']);
  }

}
