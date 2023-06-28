import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/modelos/Marca';
import { MarcaService } from 'src/app/servicio/marca.service';

@Component({
  selector: 'app-edit-marca',
  templateUrl: './edit-marca.component.html',
  styleUrls: ['./edit-marca.component.css']
})
export class EditMarcaComponent implements OnInit {

  marca: Marca = new Marca()

  constructor(private marcaService: MarcaService, private router: Router) { }

  ngOnInit(): void { this.editar() }

  editar(): void {
    let id = localStorage.getItem("id");
    this.marcaService.getMarcaId(+id!).subscribe(
      data => this.marca = data
    );
  }

  actualizar(marca: Marca) {
    this.marcaService.updateMarca(marca).subscribe(
      res => this.router.navigate(['/app/marcas']),
      err => console.log(err)
    )
  }

  cancelar(){
    this.router.navigate(['/app/marcas']);
  }

}
