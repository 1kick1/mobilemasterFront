import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/modelos/Marca';
import { MarcaService } from 'src/app/servicio/marca.service';

@Component({
  selector: 'app-add-marca',
  templateUrl: './add-marca.component.html',
  styleUrls: ['./add-marca.component.css']
})
export class AddMarcaComponent implements OnInit {

  modelMarca = new Marca()

  constructor(private marcaService: MarcaService, private router: Router) { }

  ngOnInit(): void { }

  guardar(marca: Marca) {
    this.marcaService.createMarcas(marca).subscribe(
      res => this.router.navigate(['/app/marcas']),
      err => console.log(err)
    )
  }

  cancelar(){
    this.router.navigate(['/app/marcas']);
  }

}
