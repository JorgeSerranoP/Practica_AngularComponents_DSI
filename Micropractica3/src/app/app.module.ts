import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { ProvinciaComponent } from './provincia/provincia.component';

@NgModule({
  declarations: [
    AppComponent,
    ComunidadComponent,
    ProvinciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
