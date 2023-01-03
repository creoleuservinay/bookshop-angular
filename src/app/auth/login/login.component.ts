import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/types/login';
import { Register } from 'src/app/types/register';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
import { ResponseService } from 'src/app/response/response.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
    private response: ResponseService,
    private router: Router
    ) { }
  form: Login = {
    email: '',
    password: '',
  }

    login() {
      let loginApi = this.authService.login(this.form);
        if(loginApi){
          loginApi.subscribe( (data: any) => {
            let tokenReceived = data['data']['token']
            if( tokenReceived != null ){
              localStorage.setItem("access-token",tokenReceived)
                this.router.navigate(['/']);
                this.response.showSuccess({ status: "OK", message: 'Logged in' })
            } else {
              this.router.navigate(['/login']);
              this.response.showError({ status: "FAIL", message: 'check your credentials !!!' })

            }
        });
      } else {
        this.router.navigate(['/login']);
        this.response.showError({ status: "FAIL", message: 'check your credentials !' })
      }
  }

  isLoading() {
    return this.authService.isLoading
  }

  

  ngOnInit(): void {
  }

}
