import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,

    MaterialModule,
  ],

  exports: [],
})
export class PagesModule {}
