import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';

import { UserSectionComponent } from './header/user-section/user-section.component';
import { PagesModule } from '../views/pages/pages.module';
import { MaterialModule } from '../material/material.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlockUIModule } from 'ng-block-ui';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    UserSectionComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
  ],

  exports: [
    BaseComponent,
    HeaderComponent,
    UserSectionComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
  ],

  imports: [
    LayoutRoutingModule,
    CoreModule,
    PagesModule,
    MaterialModule,
    BlockUIModule.forRoot(),
  ],
})
export class LayoutModule {}
