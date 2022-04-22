import { NgModule } from '@angular/core';
import { ModuleConfigurationRoutingModule } from './module-configuration-routing.module';
import { ModalEditModuleComponent } from './module/modal-edit-module/modal-edit-module.component';
import { ModuleComponent } from './module/module.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ModuleMenusComponent } from './module/module-menus/module-menus.component';
import { CoreModule } from 'src/app/core/core.module';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users/users-table/users-table.component';


@NgModule({
  declarations: [
    ModuleComponent,
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

  ],
  entryComponents:[ModalEditModuleComponent]
})
export class ModuleConfigurationModule { }
