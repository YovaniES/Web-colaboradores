import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { CompanyListComponent } from '../views/pages/maintenance/company-list/company-list.component';
import { MainComponent } from './main/main.component';
import { UserSurveyComponent } from '../views/pages/return-to-workshop/user-survey/user-survey.component';
import { UsuariosListComponent } from '../views/pages/maintenance/usuarios-list/usuarios-list.component';
import { ListOfPassesComponent } from '../views/pages/return-to-workshop/list-of-passes/list-of-passes.component';
import { RolePermissionComponent } from '../views/pages/module-configuration/role-permission/role-permission.component';
import { ModuleComponent } from '../views/pages/module-configuration/module/module.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,

    children: [
      { path: 'inicio', component: MainComponent },
      //{ path: 'usuarios', component: UsuariosListComponent },
      //{ path: 'company', component: CompanyListComponent },
     // { path: 'encuesta', component: UserSurveyComponent },
      //{ path: 'pases', component: ListOfPassesComponent },
      { path: 'modulos', component: ModuleComponent },
      { path: 'permisos', component: RolePermissionComponent },
      { path: '**', redirectTo: 'inicio' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
