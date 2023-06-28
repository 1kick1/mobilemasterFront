import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Cliente';
import { ClienteService } from 'src/app/servicio/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  modelCliente = new Cliente()

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void { }

  guardar(cliente: Cliente) {
    this.clienteService.createCliente(cliente).subscribe(
      res => this.router.navigate(['/app/clientes']),
      err => console.log(err)
    )
  }

  cancelar(){
    this.router.navigate(['/app/clientes']);
  }

}
