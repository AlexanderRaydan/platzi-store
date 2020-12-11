import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundRoutesModule } from './page-not-found-routes.module';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNotFoundRoutesModule,
  ]
})
export class PageNotFoundModule { }
