import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/types/register';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registerform: Register = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  register() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.registerform.email,  this.registerform.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       console.log(user, '------Auth user')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    
  }

  ngOnInit(): void {
  }

}
