import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalevolaPageRoutingModule } from './malevola-routing.module';

import { MalevolaPage } from './malevola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalevolaPageRoutingModule
  ],
  declarations: [MalevolaPage]
})
export class MalevolaPageModule {}
