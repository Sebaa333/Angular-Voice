import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { DatosComponent } from './datos/datos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations:
  [AppComponent,
    TablaComponent,
    DatosComponent
  ],
  imports:
   [BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ], // Agrega FormsModule a los imports
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}