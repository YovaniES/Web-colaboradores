import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListOfPassesComponent } from './users-passes/list-of-passes/list-of-passes.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ModuleConfigurationComponent } from './administration/module-configuration/module-configuration.component';
import { RolePermissionComponent } from './administration/role-permission/role-permission.component';
import { UserSurveyComponent } from './mantenimiento/user-survey/user-survey.component';
import { UsuariosListComponent } from './mantenimiento/usuarios-list/usuarios-list.component';
import { CompanyListComponent } from 'src/app/views/pages/mantenimiento/company-list/company-list.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    ListOfPassesComponent,
    ModuleConfigurationComponent,
    RolePermissionComponent,

    CompanyListComponent,
    UsuariosListComponent,
    UserSurveyComponent,
  ],

  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,

    MaterialModule,
    QRCodeModule,
  ],

  exports: [
    ListOfPassesComponent,
    CompanyListComponent,
    UsuariosListComponent,
    UserSurveyComponent,
  ],
})
export class PagesModule {}
