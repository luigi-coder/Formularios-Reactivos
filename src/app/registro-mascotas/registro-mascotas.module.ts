import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroMascotasComponent } from './registro-mascotas.component';
import { FormulariosService } from '../serviceForms/formularios.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    RegistroMascotasComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule
  ],
  exports: [
    RegistroMascotasComponent
  ],
  providers: [
    FormulariosService
  ]
})
export class RegistroMascotasModule { }
