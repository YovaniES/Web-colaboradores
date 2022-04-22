import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CliPicklistComponent } from './components/cli-picklist/cli-picklist.component';



@NgModule({
  declarations: [
    CliPicklistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CliPicklistComponent,
  ]
})
export class CoreModule { }
