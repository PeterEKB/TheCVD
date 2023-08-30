import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoulasMainComponent } from './pages/doulas-main/doulas-main.component';
import { FormComponent } from './pages/form/form.component';
import { ListOfDoulasComponent } from './pages/list-of-doulas/list-of-doulas.component';
import { SynopsisComponent } from './pages/synopsis/synopsis.component';

const routes: Routes = [
  {
    path: '',
    component: DoulasMainComponent,
    children: [
      {
        path: '',
        component: SynopsisComponent,
      },
      {
        path: ':location',
        component: ListOfDoulasComponent,
      },
      {
        path: 'form/:doula',
        component: FormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoulasRoutingModule {}
