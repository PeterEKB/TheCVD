import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoulasRoutingModule } from './doulas-routing.module';
import { DoulasMainComponent } from './pages/doulas-main/doulas-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SynopsisComponent } from './pages/synopsis/synopsis.component';
import { ListOfDoulasComponent } from './pages/list-of-doulas/list-of-doulas.component';
import { FormComponent } from './pages/form/form.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    DoulasMainComponent,
    SynopsisComponent,
    ListOfDoulasComponent,
    FormComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    DoulasRoutingModule,
    SharedModule
  ]
})
export class DoulasModule { }
