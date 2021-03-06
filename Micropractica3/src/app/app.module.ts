import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';

@NgModule({
  declarations: [
    AppComponent,
    ComunidadComponent,
    PropiedadesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
