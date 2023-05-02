import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPwd } from './confirmPwd';

import { IUser } from '../iuser';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formSubmited = false;
  error = "";
  form = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: [ '', 
    {
        validators: [
            Validators.required, 
            Validators.email
        ],
        updateOn: 'blur'
    }],
    password: ['', 
    {
      validators: [
        Validators.required, 
        Validators.minLength(8)
      ],
      updateOn: 'blur'
    }],

    passwordConfirm: ['', {validators:[Validators.required, confirmPwd('password')]}]
  });
  user: IUser | undefined;

  constructor(private fb: FormBuilder, private authService : AuthService, private router: Router, private tokenStorage: TokenStorageService) {}

  get firstname() {
    return this.form.controls['firstname'];
  }
  get lastname() {
    return this.form.controls['lastname'];
  }
  get email() {
    return this.form.controls['email'];
  }
  get password() {
      return this.form.controls['password'];
  }
  get passwordConfirm() {
    return this.form.controls['passwordConfirm'];
  }

  onSubmit(): void {
    this.formSubmited = true;
    if(this.form.valid){
      const { firstname, lastname, email, password } = this.form.value;
      /*@ts-ignore*/
      this.authService.register(firstname, lastname, email, password).subscribe({
        next: (data) => {
          console.log(data);
          /*@ts-ignore*/
          this.authService.login(email, password)
          .subscribe({
            next: () => {
              this.router.navigate(['/welcome']);
            },
            error: (error) => {
              this.error = error.error.message;
            },
          });
        },
        error: (error) => {
          this.error = error.error.message;
        }
      });
    }
  }

}


