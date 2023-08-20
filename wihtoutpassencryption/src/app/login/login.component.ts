import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('Login response:', response); // Log the full response
        if (response.id) {
          this.router.navigate(['/loginsuccess']);
        } else {
          this.errorMessage = 'Invalid email or password.';
        }
      },
      error => {
        console.log('Login error:', error);
        this.errorMessage = 'An error occurred during login. Please try again later.';
      }
    );
  }
  
}
