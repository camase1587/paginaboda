import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

const routes: Routes = [
  { path: ':idTarjeta', component: TarjetaComponent },  // Captura lo que viene después del '/'
  { path: '', redirectTo: '/', pathMatch: 'full' },     // Redirecciona a una página de inicio u otra ruta
  { path: '**', redirectTo: '/' }                       // Maneja rutas no definidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
