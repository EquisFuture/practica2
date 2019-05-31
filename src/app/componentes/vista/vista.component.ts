import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/Usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  usuarios: Array<Usuario>;
  
  constructor(public usuarioService: UsuarioService) { 
    this.usuarios = new Array<Usuario>(); 
  }

  ngOnInit() {
    this.usuarioService.obtenerUsuarios().subscribe(usuario => { this.usuarios.push(usuario); });
  }
}
