import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/modelos/Marca';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  modelProducto = new Producto();
  marcas!:Marca[];
  constructor(private router:Router, private productoService:ProductoService) { }

  ngOnInit(): void {
    this.cargarMarca();
  }

  guardar(producto:Producto){

    this.productoService.createProducto(producto).subscribe( data=>{
        this.router.navigate(['/app/productos']);
    });
  }

  cancelar(){
    this.router.navigate(['/app/productos']);
  }

  cargarMarca(){
    this.productoService.getMarcas().subscribe(
      data=>{
        this.marcas=data;
        console.log("datos son:");
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }
}

