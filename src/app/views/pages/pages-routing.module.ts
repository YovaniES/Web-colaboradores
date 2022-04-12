import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersQrComponent } from '../../public/validate-qr/users-qr/users-qr.component';

const routes: Routes = [
  { path:'user', component:UsersQrComponent },
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
