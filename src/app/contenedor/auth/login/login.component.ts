import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  //Creó la lógica del formulario, los campos y las validaciones
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private authSvc: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  
  /* 
    Este método, llamara al servicio o intermediario, enviando los datos obtenidos del formulario,
    si la información es correcta, lo enviara a la página de "Inicio" 
  */
  onLogin() {
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email, password).then((res) => {
      if (res) {
        this.router.navigate(['/inicio']);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No está autorizado',
        });
      }
    });
    this.loginForm.reset();
  }
}
