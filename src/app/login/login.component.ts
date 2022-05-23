import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormulariosService } from '../serviceForms/formularios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  @HostBinding() class = 'app-login';

  miFormularioLogin!: FormGroup;

  mensajeDeRegistro?: boolean;

  constructor(private fb: FormBuilder, private formulariosService: FormulariosService) {

    this.miFormularioLogin = fb.group({
      celular: ['', Validators.required],
      codigo: ['', Validators.required]
    });

    this.formulariosService.loginForm$.subscribe(
      (loginForm: boolean) => {
        
        this.mensajeDeRegistro = loginForm;

      });
  }

  ngOnInit(): void {}

  iniciarSesion(){
      
      console.log(`celular: ${this.miFormularioLogin.controls["celular"].value}`);
      console.log(`codigo: ${this.miFormularioLogin.controls["codigo"].value}`);

      this.miFormularioLogin.reset();

      Object.keys(this.miFormularioLogin.controls).forEach((key:string) => {

        this.miFormularioLogin.get(key)?.setErrors(null);

    });
  }

  MensajeError(campo: string){

    return this.miFormularioLogin.controls[campo].errors && this.miFormularioLogin.controls[campo].touched;
  }

}
