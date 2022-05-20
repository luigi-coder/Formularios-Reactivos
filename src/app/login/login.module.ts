import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormulariosService } from '../serviceForms/formularios.service';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    MatButtonModule,

  ],
  exports: [
    LoginComponent
  ],
  providers: [
    FormulariosService
  ],
})
export class LoginModule { }
