import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmployesPage } from './add-employes.page';

const routes: Routes = [
  {
    path: '',
    component: AddEmployesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEmployesPageRoutingModule {}
