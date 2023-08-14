import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.submitLogin();
  }

  submitLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
    console.log('Login form : ', this.loginForm);
  }

  // go to homepage
  goToHomepage() {
    this.authService.login();
    this.router.navigate(['/']);
  }
}
