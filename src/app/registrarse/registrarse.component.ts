import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { FormulariosService } from '../serviceForms/formularios.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrarseComponent implements OnInit {

  @HostBinding() class = 'app-registrarse'

  mensaje: string = '';
  formRegistroActivo: boolean = false;


  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
  };
  
  miFormulario!: FormGroup;

  radioExample: FormControl = new FormControl('Indica');

  constructor(private fb: FormBuilder, private formulariosService: FormulariosService) {

    this.miFormulario = fb.group({

      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      celular: ['', Validators.required],
      apellido: ['', Validators.required],
      codigo: ['', Validators.required],
      preferencias: this.radioExample
  
    })
    
  }

  ngOnInit(): void {}

  registrarse(){

    console.log(`email: ${this.miFormulario.controls['email'].value}`);
    console.log(`nombre: ${this.miFormulario.controls["nombre"].value}`);
    console.log(`celular: ${this.miFormulario.controls["celular"].value}`);
    console.log(`apellido: ${this.miFormulario.controls["apellido"].value}`);
    console.log(`codigo: ${this.miFormulario.controls["codigo"].value}`);
    console.log(`Preferencias: ${this.miFormulario.controls["preferencias"].value}`);

    console.log(JSON.stringify(this.miFormulario.value))
    
    //this.miFormulario.markAsUntouched();

    this.miFormulario.reset();

    // Bug - No limpia los errores del control
    /* this.miFormulario.controls['email'].setErrors(null);
    this.miFormulario.controls["nombre"].setErrors(null);
    this.miFormulario.controls["celular"].setErrors(null); */

    Object.keys(this.miFormulario.controls).forEach((key:string) => {

        this.miFormulario.get(key)?.setErrors(null);

    });

    console.log(this.miFormulario);
  
    this.formulariosService.enviarLoginBooleano(true);
    
    this.formRegistroActivo = true;

    
  }

  MensajeError(campo: string){

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

}
