import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutasComponent } from './components/crud-frutas/crud-frutas.component';
import { LoginComponent } from './components/login/login.component';
import { BackofficeGuard } from './guards/backoffice.guard';

const routes: Routes = [
  {path: 'home', component: ComparadorComponent},
  {path: 'formulario', component: FormularioComponent,canActivate:[BackofficeGuard]},
  {path: 'formulario/:id', component: FormularioComponent,canActivate:[BackofficeGuard]},
  {path: 'frutas', component: CrudFrutasComponent,canActivate:[BackofficeGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
