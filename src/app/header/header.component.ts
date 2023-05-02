import { Component } from '@angular/core';
import { IUser } from '../iuser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogged: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe((user) => {
      this.isLogged = !!user;
    })
  }
}
