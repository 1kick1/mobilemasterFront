import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private http: HttpClient,
  ) { }

  listarPedidos(): Observable<any> {
    return this.http.get<any>(environment.url+'/api/pedidos');
  }

  registrarPedidos(pedidoDTO: any): Observable<any> {
    return this.http.post<any>(environment.url+'/api/pedidos', pedidoDTO);
  }

  obtenerPedidoPorId(pedidoId: number): Observable<any> {
    return this.http.get<any>(environment.url+'/api/pedidos/'+pedidoId);
  }
}
