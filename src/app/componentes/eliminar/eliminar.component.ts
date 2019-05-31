import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/Usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  id: string;
  usuarios: Array<Usuario>;

  constructor(public usuarioService: UsuarioService) {
    this.usuarios = new Array<Usuario>(); 
   }

  ngOnInit() {
    this.usuarioService.obtenerUsuarios().subscribe(usuario => { this.usuarios.push(usuario); });
  }

  eliminar(){
    this.usuarioService.eliminarUsuario(this.id);
    alert("Se eliminó el usuario.");
  }
}
