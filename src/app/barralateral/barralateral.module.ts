import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';



@NgModule({
  declarations: [
    BarraComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarraComponent
  ]
})
export class BarralateralModule { }
