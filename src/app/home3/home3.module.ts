import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Home3Page } from './home3.page';

import { Home3PageRoutingModule } from './home3-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home3PageRoutingModule
  ],
  declarations: [Home3Page]
})
export class Home3PageModule {}
