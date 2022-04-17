import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleConfigurationRoutingModule } from './module-configuration-routing.module';
import { ModalEditModuleComponent } from './module/modal-edit-module/modal-edit-module.component';
import { ModuleComponent } from './module/module.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleMenusComponent } from './module/module-menus/module-menus.component';


@NgModule({
  declarations: [
    ModuleComponent,
    RolePermissionComponent,

    ModalEditModuleComponent,
    ModuleMenusComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModuleConfigurationRoutingModule,

    MaterialModule,

  ],
  entryComponents:[ModalEditModuleComponent]
})
export class ModuleConfigurationModule { }
