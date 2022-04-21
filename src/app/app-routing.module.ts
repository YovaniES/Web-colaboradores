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
      { path: 'home',
        loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule),
        canActivate: [ValidarTokenGuard],
      },
      { path: 'administracion',
        loadChildren: () => import('./views/pages/module-configuration/module-configuration.module').then(m => m.ModuleConfigurationModule)
      }
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
