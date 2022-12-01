import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Login } from '../types/login';
import { Register } from '../types/register';
import { ToastrService } from 'ngx-toastr';
import { ResponseService } from '../response/response.service';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private response: ResponseService,
    private router: Router,
    private http: HttpClient
    ) { }

  isLoading: boolean = false
  isAuthenticated: boolean = false

  // Firebase Login
  login(formData: Login) {
    if (this.isLoading) return
    this.isLoading = true

    const body = formData
    //**************************NodeJs***********************************************
    const url = 'http://localhost:3000/api/v1/login/';
    const responseData =  this.http.post(url, body).subscribe({
      next: data => {
        this.response.showSuccess({ status: "OK", message: 'Logged In' })
        this.isLoading = false
        this.router.navigate(['/cart']);

      },
      error: error => {
        console.log(error.error.message)
          const errorMessage = error.error.message;
          this.response.showError({ status: "FAIL", message: errorMessage})
          this.isLoading = false
          this.router.navigate(['/login']);
        }
    })
    //*******************************Firebase login **************************/
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, form.email, form.password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     this.isAuthenticated = true
    //     this.response.showSuccess({ status: "OK", message: 'Logged in' })
    //     this.router.navigate(['']);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     this.isAuthenticated = false
    //     this.response.showError({ status: "FAIL", message: errorMessage })

    //   }).finally(() => (this.isLoading = false));
  }

  

  // Firebase Register
  register(registerform: Register) {
    const auth = getAuth();
    if (this.isLoading) return
    this.isLoading = true
    const body = registerform
    //**************************NodeJs***********************************************
    const url = 'http://localhost:3000/api/v1/users/';
    const responseData =  this.http.post(url, body).subscribe( {
      next: data => {
        this.response.showSuccess({ status: "OK", message: 'Congratulation! You are registered successfully' })
        this.isLoading = false
        this.router.navigate(['/login']);

      },
      error: error => {
          const errorMessage = error;
          this.response.showError({ status: "FAIL", message: error.error.errors.map((msg: any)=> msg.msg).join('; ') })
          this.isLoading = false
          this.router.navigate(['/register']);
        }
    })
    //**************************FireBase***********************************************
    // createUserWithEmailAndPassword(auth, registerform.email, registerform.password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     this.response.showSuccess({ status: "OK", message: 'Congratulation! You are registered successfully' })
    //     this.router.navigate(['/login']);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     this.response.showError({ status: "FAIL", message: errorMessage })
    //   }).finally(() => (this.isLoading = false))
  }
  // Logout
  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false
      this.router.navigate(['login']);
    }).catch((error) => {
    });
  }
}
