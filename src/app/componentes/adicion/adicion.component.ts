import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/Usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-adicion',
  templateUrl: './adicion.component.html',
  styleUrls: ['./adicion.component.css']
})
export class AdicionComponent implements OnInit {
  nombre: string;
  telefono: string;
  direccion: string;
  email: string;

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  agregarUsuario() {
    this.usuarioService.agregarUsuario(
      new Usuario(this.nombre,
                  this.telefono,
                  this.direccion,
                  this.email)).subscribe();
    alert("Se registró el usuario.");
  }
}
