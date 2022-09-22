import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalevolaPage } from './malevola.page';

const routes: Routes = [
  {
    path: '',
    component: MalevolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalevolaPageRoutingModule {}
