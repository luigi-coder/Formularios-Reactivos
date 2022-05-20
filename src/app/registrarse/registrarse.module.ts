import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarseComponent } from './registrarse.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormulariosService } from '../serviceForms/formularios.service';


@NgModule({
  declarations: [
    RegistrarseComponent
  ],

  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatRadioModule

  ],
  exports: [
    RegistrarseComponent
  ],
  providers: [
    FormulariosService
  ]
})
export class RegistrarseModule { }
