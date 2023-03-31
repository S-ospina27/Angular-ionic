import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipsEmployesPageRoutingModule } from './tips-employes-routing.module';

import { TipsEmployesPage } from './tips-employes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipsEmployesPageRoutingModule
  ],
  declarations: [TipsEmployesPage]
})
export class TipsEmployesPageModule {}
