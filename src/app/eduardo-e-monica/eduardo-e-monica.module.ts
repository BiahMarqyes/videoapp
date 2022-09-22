import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EduardoEMonicaPageRoutingModule } from './eduardo-e-monica-routing.module';

import { EduardoEMonicaPage } from './eduardo-e-monica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EduardoEMonicaPageRoutingModule
  ],
  declarations: [EduardoEMonicaPage]
})
export class EduardoEMonicaPageModule {}
