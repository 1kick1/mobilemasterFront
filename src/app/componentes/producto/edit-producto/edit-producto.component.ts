import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/modelos/Marca';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto: Producto= new Producto();
  marcas!:Marca[];
  constructor( private router:Router, private productoService:ProductoService ) { }

  ngOnInit(): void {
    this.editar();
    this.cargarMarca();
  }

  editar(){
      let id= JSON.parse(localStorage.getItem('id') as string);
      this.productoService.getProductoId(id).subscribe(data=>{
       this.producto=data;
    });
   }

   actualizar(producto:Producto){
      this.productoService.updateProducto(producto).subscribe(data=>{
          this.producto=data; 
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
