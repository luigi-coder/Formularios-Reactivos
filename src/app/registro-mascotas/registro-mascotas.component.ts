import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pais } from '../interfaces/interfaces';

@Component({
  selector: 'app-registro-mascotas',
  templateUrl: './registro-mascotas.component.html',
  styleUrls: ['./registro-mascotas.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroMascotasComponent implements OnInit {

  @HostBinding() class = 'app-registro-mascotas';

  //------------- Array de componente select Angular Material 

  paises: Pais[] = [
    {value: 'Peru-0', viewValue: 'Peru'},
    {value: 'Argentina-1', viewValue: 'Argentina'},
    {value: 'Uruguay-2', viewValue: 'Uruguay'},
    {value: 'Brasil-3', viewValue: 'Brasil'},
  ];

  //------------- Aca termina

  miFormularioRegistroMascotas!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.miFormularioRegistroMascotas = fb.group({
      
    });
  }

  ngOnInit(): void {}

  registrarMascotas(){

    // Sumar mascotas

    
  }

  

}
