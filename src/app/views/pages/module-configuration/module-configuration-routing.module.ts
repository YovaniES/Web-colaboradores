import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module/module.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';

const routes: Routes = [
  { path: 'modulos', component: ModuleComponent},
  { path: 'permisos', component: RolePermissionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleConfigurationRoutingModule { }