import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './componentes/user-login/user-login.component';
import { ListarProductoComponent } from './componentes/producto/listar-producto/listar-producto.component';
import { AddProductoComponent } from './componentes/producto/add-producto/add-producto.component';
import { EditProductoComponent } from './componentes/producto/edit-producto/edit-producto.component';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './componentes/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './componentes/cliente/edit-cliente/edit-cliente.component';
import { ListarPedidoComponent } from './componentes/pedido/listar-pedido/listar-pedido.component';
import { AddPedidoComponent } from './componentes/pedido/add-pedido/add-pedido.component';
import { ListarMarcaComponent } from './componentes/marca/listar-marca/listar-marca.component';
import { AddMarcaComponent } from './componentes/marca/add-marca/add-marca.component';
import { EditMarcaComponent } from './componentes/marca/edit-marca/edit-marca.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

const routes: Routes = [
  {
    path: 'login', component: UserLoginComponent
  },
  {
    path: 'app',
    component: NavbarComponent,
    children: [
      {
        path: 'productos', component:ListarProductoComponent
      },
      {
        path: 'nuevoProducto', component:AddProductoComponent
      },
      {
        path: 'editarProducto', component:EditProductoComponent
      },
      {
        path: 'marcas', component:ListarMarcaComponent
      },
      {
        path: 'nuevoMarca', component:AddMarcaComponent
      },
      {
        path: 'editarMarca', component:EditMarcaComponent
      },
      { 
        path: 'clientes', component: ListarClienteComponent 
      },
      { 
        path: 'nuevoCliente', component: AddClienteComponent 
      },
      {
         path: 'editarCliente', component: EditClienteComponent 
      },
      {
         path: 'pedidos', component: ListarPedidoComponent 
      },
      { 
        path: 'nuevoPedido', component: AddPedidoComponent 
      },
      {
        path: '**', redirectTo: 'productos', pathMatch: 'full'
      }
    ]
  },
/*   {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
