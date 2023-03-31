import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmployesPageRoutingModule } from './add-employes-routing.module';

import { AddEmployesPage } from './add-employes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEmployesPageRoutingModule
  ],
  declarations: [AddEmployesPage]
})
export class AddEmployesPageModule {}
