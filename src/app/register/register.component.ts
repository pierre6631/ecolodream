import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email = {name: "email", placeholder: "Email", type: "email"};
  password = {name: "password", placeholder: "Mot de passe", type: "password"}
}
