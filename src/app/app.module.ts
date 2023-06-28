import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './componentes/user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarProductoComponent } from './componentes/producto/listar-producto/listar-producto.component';
import { AddProductoComponent } from './componentes/producto/add-producto/add-producto.component';
import { EditProductoComponent } from './componentes/producto/edit-producto/edit-producto.component';
import { AddPedidoComponent } from './componentes/pedido/add-pedido/add-pedido.component';
import { ListarPedidoComponent } from './componentes/pedido/listar-pedido/listar-pedido.component';
import { AddClienteComponent } from './componentes/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './componentes/cliente/edit-cliente/edit-cliente.component';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';
import { ListarMarcaComponent } from './componentes/marca/listar-marca/listar-marca.component';
import { AddMarcaComponent } from './componentes/marca/add-marca/add-marca.component';
import { EditMarcaComponent } from './componentes/marca/edit-marca/edit-marca.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ListarProductoComponent,
    AddProductoComponent,
    EditProductoComponent,
    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListarPedidoComponent,
    AddPedidoComponent,
    ListarMarcaComponent,
    AddMarcaComponent,
    EditMarcaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
