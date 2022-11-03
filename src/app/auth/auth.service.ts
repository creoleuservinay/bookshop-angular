import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Login } from '../types/login';
import { Register } from '../types/register';
import { ToastrService } from 'ngx-toastr';
import { ResponseService } from '../response/response.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private response: ResponseService,
    private router: Router) { }

  isLoading: boolean = false
  isAuthenticated: boolean = false
 
  // Firebase Login
  login(form: Login) {
    if(this.isLoading) return
    this.isLoading = true
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email , form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isAuthenticated = true
        this.response.showSuccess({status: "OK", message: 'Logged in'})
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false
        this.response.showError({status: "FAIL", message: 'Wrong email or password!!'})

      }).finally(() => (this.isLoading = false));
  }

  // Firebase Register
  register(registerform: Register) {
    const auth = getAuth();
    if(this.isLoading) return
    this.isLoading = true
    createUserWithEmailAndPassword(auth, registerform.email,  registerform.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.response.showSuccess({status: "OK", message: 'Congratulation! You are registered successfully'})
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.response.showError({status: "FAIL", message: 'Something went wrong! please check inputs'})
      }).finally(() => (this.isLoading = false))
  }
  // Logout
  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false
      this.router.navigate(['login']);
    }).catch((error) => {
    });
  }
}
