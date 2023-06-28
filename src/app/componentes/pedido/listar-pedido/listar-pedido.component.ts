import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/modelos/Pedido';
import { PedidoService } from 'src/app/servicio/pedido.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {

  listPedidos: Pedido[] = [];

  constructor(
    private _pedidosService: PedidoService,
    private _router: Router
  ) { 
    this.listarPedidos();
  }

  ngOnInit(): void {

  }

  listarPedidos(): void {
    this._pedidosService.listarPedidos().subscribe({
      next: (data: Pedido[]) => {
        this.listPedidos = data.map((x) => {
          let importeTotal = 0;
          x.pedidoDetalleDTO.forEach((y) => {
            importeTotal+=y.importe;
          });
          x.importeVta = importeTotal;
          
          return x;
        });
      },
      error: (err: any) => {
        alert(err.message);
      }
    })
  }

  nuevoPedido(): void {
    this._router.navigate(['/app/nuevoPedido'])
  }

  editarPedido(pedido: Pedido): void {

  }

  eliminarPedido(pedido: Pedido): void {
    
  }

}
