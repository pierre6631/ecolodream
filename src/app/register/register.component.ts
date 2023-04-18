import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPwd } from './confirmPwd';
import { UserService } from '../user.service';
import { IUser } from '../iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

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

    passwordConfirm: ['', {validators:[Validators.required, confirmPwd('password')], updateOn: 'blur'}]
  });
  user: {} | undefined;

  constructor(private fb: FormBuilder, private userService: UserService) {}

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
    if(this.form.valid){
      this.userService.addUser(
        /*@ts-ignore*/
        this.form.value.lastname, this.form.value.firstname, this.form.value.email, this.form.value.password
        ).subscribe((data: IUser) => this.user = { ...data });
    }
  }
}


