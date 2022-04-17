import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnToWorkshopRoutingModule } from './return-to-workshop-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ListOfPassesComponent } from './list-of-passes/list-of-passes.component';
import { UserSurveyComponent } from './user-survey/user-survey.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    ListOfPassesComponent,
    UserSurveyComponent
  ],
  imports: [
    CommonModule,
    ReturnToWorkshopRoutingModule,
    MaterialModule,
    QRCodeModule,

  ]
})
export class ReturnToWorkshopModule { }
