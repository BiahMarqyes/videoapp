import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsVantagensDeSerInvisivelPage } from './as-vantagens-de-ser-invisivel.page';

const routes: Routes = [
  {
    path: '',
    component: AsVantagensDeSerInvisivelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsVantagensDeSerInvisivelPageRoutingModule {}
