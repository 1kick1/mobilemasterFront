import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Cliente';
import { ClienteService } from 'src/app/servicio/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes?: Cliente[];

  constructor(private clientService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getClientes().subscribe(
      data => this.clientes = data,
      error => console.log(error)
    );
  }

  nuevo(): void {
    this.router.navigate(['/app/nuevoCliente']);
  }

  editar(cliente: Cliente): void {
    localStorage.setItem("id", cliente.idCliente.toString());
    this.router.navigate(['/app/editarCliente']);
  }

  eliminar(cliente: Cliente): void {
    this.clientService.deleteCliente(cliente).subscribe(
      data => this.clientes = this.clientes!.filter(c => c !== cliente)
    );
  }

}
