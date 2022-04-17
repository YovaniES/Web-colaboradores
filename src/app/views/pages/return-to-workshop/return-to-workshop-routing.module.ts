import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfPassesComponent } from './list-of-passes/list-of-passes.component';
import { UserSurveyComponent } from './user-survey/user-survey.component';

const routes: Routes = [
  {
    path: 'pases',
    component: ListOfPassesComponent,
  },
  {
    path: 'encuesta',
    component: UserSurveyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnToWorkshopRoutingModule {}
