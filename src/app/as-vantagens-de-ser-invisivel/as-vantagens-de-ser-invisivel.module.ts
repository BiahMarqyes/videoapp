import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsVantagensDeSerInvisivelPageRoutingModule } from './as-vantagens-de-ser-invisivel-routing.module';

import { AsVantagensDeSerInvisivelPage } from './as-vantagens-de-ser-invisivel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsVantagensDeSerInvisivelPageRoutingModule
  ],
  declarations: [AsVantagensDeSerInvisivelPage]
})
export class AsVantagensDeSerInvisivelPageModule {}
