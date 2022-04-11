import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';

import { UserSectionComponent } from './user-section/user-section.component';
//import { NgQrScannerModule } from 'angular2-qrscanner';
import { PagesModule } from '../views/pages/pages.module';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from '../material/material.module';
import { MainComponent } from './main/main.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlockUIModule } from 'ng-block-ui';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CompanyListComponent } from './mantenimiento/company-list/company-list.component';
import { UsuariosListComponent } from './mantenimiento/usuarios-list/usuarios-list.component';
import { UserSurveyComponent } from './user-survey/user-survey.component';
import { ListOfPassesComponent } from './list-of-passes/list-of-passes.component';

import { QRCodeModule } from 'angularx-qrcode';
import { NgQrScannerModule } from 'ang-qrscanner';


@NgModule({
  declarations: [
    BaseComponent,
    FooterComponent,
    UserSectionComponent,
    MainComponent,
    PagesComponent,
    HeaderComponent,
    SidebarComponent,
    CompanyListComponent,
    UsuariosListComponent,
    UserSurveyComponent,
    ListOfPassesComponent,
  ],

  exports: [
    BaseComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserSectionComponent,
    MainComponent,
    CompanyListComponent
  ],

  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatFormFieldModule,
    ComponentsModule,

    ReactiveFormsModule,
    FormsModule,

    PagesModule,
    NgQrScannerModule,
    MatMenuModule,
    MaterialModule,
    BlockUIModule.forRoot(),

    QRCodeModule,


  ],
})
export class LayoutModule {}
