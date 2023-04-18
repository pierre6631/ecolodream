import { Component } from '@angular/core';
import { IUser } from '../iuser';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    email: [''],
    password: [''],
  });
  user: IUser | undefined;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  get email() {
    return this.form.controls['email'];
  }
  get password() {
      return this.form.controls['password'];
  }

  onSubmit(): void {
    if(this.form.valid){
      /*@ts-ignore*/
      this.userService.login(this.form.value.email, this.form.value.password).subscribe((data: IUser) => this.user = { ...data });
      this.router.navigate(['/welcome']);
    }
  }
}
