import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { CompanyListComponent } from '../views/pages/mantenimiento/company-list/company-list.component';
import { MainComponent } from './main/main.component';
import { UserSurveyComponent } from '../views/pages/mantenimiento/user-survey/user-survey.component';
import { UsuariosListComponent } from '../views/pages/mantenimiento/usuarios-list/usuarios-list.component';
import { ListOfPassesComponent } from '../views/pages/users-passes/list-of-passes/list-of-passes.component';
import { ModuleConfigurationComponent } from '../views/pages/administration/module-configuration/module-configuration.component';
import { RolePermissionComponent } from '../views/pages/administration/role-permission/role-permission.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,

    children: [
      { path: 'inicio', component: MainComponent },
      { path: 'usuarios', component: UsuariosListComponent },
      { path: 'company', component: CompanyListComponent },
      { path: 'encuesta', component: UserSurveyComponent },
      { path: 'pases', component: ListOfPassesComponent },
      { path: 'modulos', component: ModuleConfigurationComponent },
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
