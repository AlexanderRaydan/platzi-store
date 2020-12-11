import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../admin.guard';

import { ContactComponent } from './components/contact.component';



const routes: Routes = [

  {
    path: '',
    component: ContactComponent,
    canActivate: [AdminGuard, ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), ],
  exports: [RouterModule]
})
export class ContactRoutingModule {  }