import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showHeader: boolean = true;
  showAuthButton: boolean = true;

  constructor(private router: Router, private authService: AuthServiceService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/logIn') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }

  onLoggedIn() {
    this.authService.login();
    this.router.navigate(['/logIn']);
    this.showAuthButton = false;
  }

  onLoggedOut() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.showAuthButton = true;
  }
}
