import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingtaskPage } from './upcomingtask.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingtaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingtaskPageRoutingModule {}
