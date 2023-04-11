import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './card/card.module';
import { ButtonModule } from './button/button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    CardModule,
    ButtonModule
  ]
})
export class SharedModule { }
