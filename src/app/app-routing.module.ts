import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {DemoComponent} from './demo/demo.component';
import { LayoutComponent } from './layout/layout.component';
import { ProudctModule } from './proudct/proudct.module';
import { ContactModule } from './contact/contact.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AdminModule } from './admin/admin.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { AdminGuard } from './admin.guard';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./proudct/proudct.module').then(m => ProudctModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/components/contact.component').then(m => ContactModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => OrderModule),
      },
    ],
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => AuthModule)
  },
  {
    path: '**', // page not found, siempre dejarlo al final
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => PageNotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes , {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
