import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasteloAnimadoPage } from './castelo-animado.page';

const routes: Routes = [
  {
    path: '',
    component: CasteloAnimadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasteloAnimadoPageRoutingModule {}
