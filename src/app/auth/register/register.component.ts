import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/types/register';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }
  registerform: Register = {
    firstname: '',
    lastname: '', 
    email: '',
    password: '',
    confirmpassword: ''
  }
  register() {
    this.authService.register(this.registerform)
  }
  
  isLoading() {
    return this.authService.isLoading
  }

  ngOnInit(): void {
  }

}
