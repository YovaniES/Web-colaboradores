import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MaterialModule } from '../material/material.module';
import { PublicComponent } from './validate-qr/public.component';
import { LayoutModule } from '../layout/layout.module';
import { UsersQrComponent } from './validate-qr/users-qr/users-qr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgQrScannerModule } from 'angular2-qrscanner';


@NgModule({
  declarations: [
    PublicComponent,
    UsersQrComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LayoutModule,

    ReactiveFormsModule,
    NgQrScannerModule,
    MaterialModule,
  ]
})
export class PublicModule { }
