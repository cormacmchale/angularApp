import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentaComponent } from './componenta/componenta.component';
import { AppComponent } from './app.component';
import { ComponentbComponent } from './componentb/componentb.component';


@NgModule({
  declarations: [
    ComponentaComponent,
    AppComponent,
    ComponentbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ComponentaComponent]
})
export class AppModule { }
