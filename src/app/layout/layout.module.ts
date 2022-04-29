import { NgModule } from '@angular/core';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { UserSectionComponent } from './header/user-section/user-section.component';
import { PagesModule } from '../views/pages/pages.module';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlockUIModule } from 'ng-block-ui';
import { CoreModule } from '../core/core.module';
import { MenuMobileComponent } from './header/menu-mobile/menu-mobile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    MenuMobileComponent,
    UserSectionComponent,
    SidebarComponent,
    FooterComponent,
  ],

  exports: [
    BaseComponent,
    MenuMobileComponent,
    HeaderComponent,
    UserSectionComponent,
    SidebarComponent,
    FooterComponent,
  ],

  imports: [
    CoreModule,
    RouterModule,
    PagesModule,
    MaterialModule,
    BlockUIModule.forRoot(),
  ],
})
export class LayoutModule {}
