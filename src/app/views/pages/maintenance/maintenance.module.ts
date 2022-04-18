import { NgModule } from '@angular/core';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ModalCompaniesComponent } from './company-list/modal-companies/modal-companies.component';
import { ModalUsersComponent } from './usuarios-list/modal-users/modal-users.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    CompanyListComponent,
    UsuariosListComponent,
    ModalUsersComponent,
    ModalCompaniesComponent,
  ],
  imports: [
    MaintenanceRoutingModule,
    MaterialModule,
    CoreModule,

  ],

  entryComponents: [ModalUsersComponent, ModalCompaniesComponent],
})
export class MaintenanceModule {}
