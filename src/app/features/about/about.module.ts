import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './pages/about-main/about-main.component';
import { SharedCoreModule } from 'src/app/shared-core/shared-core.module';


@NgModule({
  declarations: [
    AboutMainComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedCoreModule
  ]
})
export class AboutModule { }
