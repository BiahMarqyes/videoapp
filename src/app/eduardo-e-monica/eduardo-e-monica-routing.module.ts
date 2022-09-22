import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EduardoEMonicaPage } from './eduardo-e-monica.page';

const routes: Routes = [
  {
    path: '',
    component: EduardoEMonicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EduardoEMonicaPageRoutingModule {}
