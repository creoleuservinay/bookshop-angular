import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { initializeApp } from "firebase/app";
import { AuthService } from "./auth/auth.service";
import { firebaseConfig } from "./firebase.config";



@Component({
  selector: "app-root",
  templateUrl: 'app.component.html',
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private authService :AuthService){}
  ngOnInit(): void {
    initializeApp(firebaseConfig)
  }
}