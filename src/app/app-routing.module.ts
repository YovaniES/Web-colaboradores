import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { ValidarTokenGuard } from './core/guards/validar-token.guard';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard],
  },
  /* {
    path: 'dashboard',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [ValidarTokenGuard],
  }, */

  {
    path: '',
    component: BaseComponent,
    children: [
      { path: 'terceros',
        loadChildren: () => import('./views/pages/return-to-workshop/return-to-workshop.module').then((m) => m.ReturnToWorkshopModule),
      },
      { path:'mantenimiento',
        loadChildren: () => import('./views/pages/maintenance/maintenance.module').then(m => m.MaintenanceModule)
      },
      { path: 'administracion',
        loadChildren: () => import('./views/pages/module-configuration/module-configuration.module').then(m => m.ModuleConfigurationModule)
      }
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
