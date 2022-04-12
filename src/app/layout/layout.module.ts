import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';

import { UserSectionComponent } from './header/user-section/user-section.component';
import { PagesModule } from '../views/pages/pages.module';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from '../material/material.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlockUIModule } from 'ng-block-ui';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    BaseComponent,
    FooterComponent,
    UserSectionComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
  ],

  exports: [
    BaseComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserSectionComponent,
    MainComponent,
  ],

  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatFormFieldModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,

    PagesModule,
    MatMenuModule,
    MaterialModule,
    BlockUIModule.forRoot(),
  ],
})
export class LayoutModule {}
