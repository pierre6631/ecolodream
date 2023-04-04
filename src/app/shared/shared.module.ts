import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { CardModule } from './card/card.module';
import { ButtonModule } from './button/button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    InputModule,
    CardModule,
    ButtonModule
  ]
})
export class SharedModule { }
