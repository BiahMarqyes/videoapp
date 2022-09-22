import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeRepenteTrintaPage } from './de-repente-trinta.page';

const routes: Routes = [
  {
    path: '',
    component: DeRepenteTrintaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeRepenteTrintaPageRoutingModule {}
