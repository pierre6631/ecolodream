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

  error: string | null = null;

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
      this.userService.login(this.form.value.email, this.form.value.password).subscribe((data: IUser) => {
        console.log(data);
        this.user = { ...data };
      }, (err) => {
        if(err.error.error === "Unauthorized"){
          this.error = "L'email ou le mot de passe est incorrect";
        }else{
          this.error = "Quelque chose s’est mal passé, veuillez réessayer"
        }
      },
      () => {
        this.router.navigate(['/welcome']);
      }
      );
    }
  }
}
