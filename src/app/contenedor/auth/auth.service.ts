import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Esta varible me ayudara a saber si el usuario esta logueado o no
  public userData$!: Observable<firebase.default.User | null>;

  constructor(public auth: AngularFireAuth, private router: Router) {
    this.userData$ = auth.authState;
  }

  //Este método me ayudara a que los usuarios puedan iniciar sesión
  async login(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );

      return result;
    } catch (error) {
      return console.log(error);
    }
  }

  //Este método permitira al usarios logueado cerrar sesión, al hacer este lo llevara inmediatamente al "Login"
  async logout() {
    try {
      await this.auth.signOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
