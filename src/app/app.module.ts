import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarralateralModule } from './barralateral/barralateral.module';
import { CuerposModule } from './cuerpos/cuerpos.module';
import { MenusModule } from './menus/menus.module';
import { PieModule } from './pie/pie.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenusModule,
    CuerposModule,
    BarralateralModule,
    PieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
