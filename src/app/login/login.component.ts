import { Component } from '@angular/core';
import { IUser } from '../iuser';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private spinner: NgxSpinnerService) {}

  get email() {
    return this.form.controls['email'];
  }
  get password() {
      return this.form.controls['password'];
  }

  onSubmit(): void {
    if(this.form.valid){
      const { email, password } = this.form.value;
      this.spinner.show();
      /*@ts-ignore*/
      this.authService.login(email, password)
      .subscribe({
        next: () => {
          this.router.navigate(['/ecolo']);
        },
        error: (error) => {
          this.spinner.hide();
          console.log(error.status);
          console.log(error);
          if(error.status === 401){
            this.error = "Les identifiants ne sont pas correct"
          }else{
            this.error = "Quelque chose s'est mal passé, veuillez réessayer"
          }
        },
      });
    }
  }
}
