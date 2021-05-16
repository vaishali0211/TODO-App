import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingtaskPageRoutingModule } from './upcomingtask-routing.module';

import { UpcomingtaskPage } from './upcomingtask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingtaskPageRoutingModule
  ],
  declarations: [UpcomingtaskPage]
})
export class UpcomingtaskPageModule {}
