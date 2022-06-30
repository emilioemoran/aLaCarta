import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorPlatosComponent } from './buscador-platos/buscador-platos.component';
import { DetallePlatoComponent } from './detalle-plato/detalle-plato.component';
import { LoginComponent } from './login/login.component';
import { PlatosComponent } from './platos/platos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: PlatosComponent },
  { path: 'buscadorPlatos', component: BuscadorPlatosComponent },
  { path: 'detallePlato', component: DetallePlatoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
