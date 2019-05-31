import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { VistaComponent } from './componentes/vista/vista.component';
import { AdicionComponent } from './componentes/adicion/adicion.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: VistaComponent},
  {path: 'vista', component: VistaComponent},
  {path: 'adicion', component: AdicionComponent},
  {path: 'eliminar', component: EliminarComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }