import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    LoginComponent
  ],

  imports: [
    CoreModule,
    AuthRoutingModule,
    MatIconModule,
  ],
  exports: [LoginComponent],
})
export class AuthModule {}
