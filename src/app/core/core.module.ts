import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CliPicklistComponent } from './components/cli-picklist/cli-picklist.component';
import { FilterPassesPipe } from './pipes/filter-passes.pipe';



@NgModule({
  declarations: [
    CliPicklistComponent,
    FilterPassesPipe
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
    FilterPassesPipe
  ]
})
export class CoreModule { }
