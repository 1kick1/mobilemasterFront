import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Cliente';
import { ClienteService } from 'src/app/servicio/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  cliente: Cliente = new Cliente()

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void { this.editar() }

  editar(): void {
    let id = localStorage.getItem("id");
    this.clienteService.getClienteId(+id!).subscribe(
      data => this.cliente = data
    );
  }

  actualizar(cliente: Cliente) {
    this.clienteService.updateCliente(cliente).subscribe(
      res => this.router.navigate(['/app/clientes']),
      err => console.log(err)
    )
  }

  cancelar(){
    this.router.navigate(['/app/clientes']);
  }

}
