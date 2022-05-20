import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginActivo } from '../interfaces/interfaces';
import { FormulariosService } from '../serviceForms/formularios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  @HostBinding() class = 'app-login';

  mensajeDeRegistro?: boolean;

  constructor(private formulariosService: FormulariosService) {

    this.formulariosService.loginForm$.subscribe(
      (loginForm: boolean) => {
        
        this.mensajeDeRegistro = loginForm;

      });
  }

  ngOnInit(): void {}

}
