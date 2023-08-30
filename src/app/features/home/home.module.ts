import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './pages/home-main/home-main.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
