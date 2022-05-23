import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegistrarseModule } from './registrarse/registrarse.module';
import { LoginModule } from './login/login.module';
import { FormulariosService } from './serviceForms/formularios.service';
import { RegistroMascotasModule } from './registro-mascotas/registro-mascotas.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RegistrarseModule,
    LoginModule,
    RegistroMascotasModule
  ],
  providers: [
    FormulariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
