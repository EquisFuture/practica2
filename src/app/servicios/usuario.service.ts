import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/Usuario';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable,Operator } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL:string='https://my-json-server.typicode.com/EquisFuture/demo/Usuarios/';
  URLget:string='https://my-json-server.typicode.com/EquisFuture/demo/db/';
  
  constructor(private request: HttpClient) {}

  obtenerUsuarios(): Observable<any>{
    return this.request.get<Usuario[]>(this.URLget);
  }

  agregarUsuario(usuario: any){
    const header = new HttpHeaders().set('Content-Type','application-json; charset=utf-8');
    return this.request.post(this.URL,JSON.stringify(usuario),{headers:header});
  }

  eliminarUsuario(id: string){
    return this.request.delete("https://my-json-server.typicode.com/EquisFuture/demo/Usuarios/"+id).subscribe();
  }
}
