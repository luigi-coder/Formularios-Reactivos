import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Mascota, Pais } from '../interfaces/interfaces';

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
    {
      value: 'Peru', 
      viewValue: 'Peru',
    },
    {
      value: 'Argentina', 
      viewValue: 'Argentina',
    },
    {
      value: 'Uruguay', 
      viewValue: 'Uruguay',
    },
    {
      value: 'Brasil', 
      viewValue: 'Brasil',
    },
  ];

  mascotas: Mascota[] = [
    {
      value: 'Mascota 01', 
      viewValue: 'Mascota 01',
    },
    {
      value: 'Mascota 02', 
      viewValue: 'Mascota 02',
    },
    {
      value: 'Mascota 03',
      viewValue: 'Mascota 03',
    },
    {
      value: 'Mascota 04',
      viewValue: 'Mascota 04',
    },
  ];
  provincias: any[] = [];

  provinciasSeleccion: any = {
    'Peru': ['Lima', 'Arequipa', 'Cusco', 'Tacna'],
    'Argentina': ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Salta'],
    'Uruguay': ['Montevideo', 'Paysandú', 'Río', 'Artigas'],
    'Brasil': ['Rio de Janeiro', 'São Paulo', 'Porto Alegre', 'Curitiba'],
  };

  expandir: boolean = false;

  //------------- Aca termina

  miFormularioRegistroMascotas!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.miFormularioRegistroMascotas = this.fb.group({
      paises: ['', Validators.required],
      provincias: ['', Validators.required],
      direcciones: ['', Validators.required],
      codigo: ['', Validators.required],
      celular: ['', Validators.required],
      mascotas: ['', Validators.required],
      arrayMascotas: this.fb.array([], Validators.required),
      
    });
    
  }
  
  tipoMascota: FormControl = this.fb.control('', Validators.required);
  nombreMascota: FormControl = this.fb.control('', Validators.required);
  edadMascota: FormControl = this.fb.control('', Validators.required);

  get arrayMascotas(){

    return this.miFormularioRegistroMascotas.get('arrayMascotas') as FormArray;
  }
  
  ngOnInit(): void {

    for(let i = 0; i < this.paises.length; i++){
      console.log(this.paises[i])
    }  
  }

  llenarProvincias(dato:any){

    this.provincias = this.provinciasSeleccion[dato];
    console.log(this.provincias)
  
  }
  expandirForm(){

    console.log("expandiendo formulario")
    this.expandir = true;
  }

  agregarMascota(){

    console.log(this.arrayMascotas.controls)
    if(this.miFormularioRegistroMascotas.valid){ return; }

    const miMascota = this.fb.group({
      tipoMascota: this.tipoMascota,
      nombreMascota: this.nombreMascota,
      edadMascota: this.edadMascota,
    });

    this.arrayMascotas.push(miMascota);
    console.log(this.arrayMascotas);



    //this.miFormularioRegistroMascotas.reset();

    /* Object.keys(this.miFormularioRegistroMascotas.controls).forEach((key:string) => {
      this.miFormularioRegistroMascotas.get(key)?.setErrors(null);
    }); */

  }

  /* registrarMascotas(){

    
    console.log(`paises: ${this.miFormularioRegistroMascotas.controls['paises'].value}`);
    console.log(`provincias: ${this.miFormularioRegistroMascotas.controls['provincias'].value}`);
    console.log(`direcciones: ${this.miFormularioRegistroMascotas.controls['direcciones'].value}`);
    console.log(`codigo: ${this.miFormularioRegistroMascotas.controls['codigo'].value}`);
    console.log(`celular: ${this.miFormularioRegistroMascotas.controls['celular'].value}`);
    console.log(`mascotas: ${this.miFormularioRegistroMascotas.controls['mascotas'].value}`);

    Object.keys(this.miFormularioRegistroMascotas.controls).forEach((key:string) => {

      this.miFormularioRegistroMascotas.get(key)?.setErrors(null);

    }); 
  }*/

}

// Debo selecccionar un array en lugar de un objeto