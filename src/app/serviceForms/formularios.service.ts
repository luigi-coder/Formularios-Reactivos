import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginActivo } from '../interfaces/interfaces';
// Crear una interface loginActivo


@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  private loginForm = new BehaviorSubject<boolean>(false);

  loginForm$ = this.loginForm.asObservable();

  enviarLoginBooleano(boleano: boolean) {
    this.loginForm.next(boleano);
    console.log(boleano);
  }

  constructor() { }
}
