import { NgModule } from '@angular/core';
import { ModuleConfigurationRoutingModule } from './module-configuration-routing.module';
import { ModalEditModuleComponent } from './modules/modal-edit-module/modal-edit-module.component';
import { ModulesComponent } from './modules/modules.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ModuleMenusComponent } from './modules/module-menus/module-menus.component';
import { CoreModule } from 'src/app/core/core.module';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { MaintenanceModule } from '../maintenance/maintenance.module';


@NgModule({
  declarations: [
    ModulesComponent,
    RolePermissionComponent,
    UsersComponent,
    UsersTableComponent,

    ModalEditModuleComponent,
    ModuleMenusComponent,

  ],
  imports: [
    CoreModule,
    ModuleConfigurationRoutingModule,

    MaterialModule,
    MaintenanceModule,
  ],
  entryComponents:[ModalEditModuleComponent]
})
export class ModuleConfigurationModule { }
