import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipsEmployesPage } from './tips-employes.page';

const routes: Routes = [
  {
    path: '',
    component: TipsEmployesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipsEmployesPageRoutingModule {}
