import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-user-connected',
  templateUrl: './nav-user-connected.component.html',
  styleUrls: ['./nav-user-connected.component.scss']
})
export class NavUserConnectedComponent {

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(): void {
    this.authService.logout();
  }

}
