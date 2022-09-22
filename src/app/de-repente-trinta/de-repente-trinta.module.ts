import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeRepenteTrintaPageRoutingModule } from './de-repente-trinta-routing.module';

import { DeRepenteTrintaPage } from './de-repente-trinta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeRepenteTrintaPageRoutingModule
  ],
  declarations: [DeRepenteTrintaPage]
})
export class DeRepenteTrintaPageModule {}
