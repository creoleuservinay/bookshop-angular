import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/types/login';
import { Register } from 'src/app/types/register';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService) { }
  form: Login = {
    email: '',
    password: '',
  }
 
    login() {
      this.authService.login(this.form)
  }

  isLoading() {
    return this.authService.isLoading
  }

  

  ngOnInit(): void {
  }

}
