import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/types/login';
import { Register } from 'src/app/types/register';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  
  constructor() { }
  form: Login = {
    email: '',
    password: '',
  }
 
  login() {
        const auth = getAuth();
          signInWithEmailAndPassword(auth, this.form.email , this.form.password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user, 'Logged in')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert('Unauthorished')
            });
  }

  

  ngOnInit(): void {
  }

}
