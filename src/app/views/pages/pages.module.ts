import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
  ],

  imports: [
   CoreModule,

    MaterialModule,
  ],

  exports: [],
})
export class PagesModule {}
