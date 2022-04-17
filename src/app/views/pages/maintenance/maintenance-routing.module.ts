import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

const routes: Routes = [
  {path:'company', component:CompanyListComponent},
  {path:'usuarios', component:UsuariosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
