import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = {name: "email", placeholder: "Email", type: "email"};
  password = {name: "password", placeholder: "Mot de passe", type: "password"}
}
