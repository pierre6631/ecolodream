import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { CardModule } from './card/card.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    CardModule
  ],
  exports: [
    InputModule,
    CardModule
  ]
})
export class SharedModule { }
