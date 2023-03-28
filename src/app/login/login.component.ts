import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  firstname = {name: "firstname", placeholder: "Prénom", type: "text"};
  email = {name: "email", placeholder: "Email", type: "email"};
  lastname = {name: "lastname", placeholder: "Nom", type: "text"}
  password = {name: "password", placeholder: "Mot de passe", type: "password"}
  passwordConfirm = {name: "password_confirm", placeholder: "Confirmer", type: "password"}
}
