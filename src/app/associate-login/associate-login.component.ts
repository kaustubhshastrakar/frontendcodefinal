import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssociateService } from '../associate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associate-login',
  templateUrl: './associate-login.component.html',
  styleUrls: ['./associate-login.component.scss']
})
export class AssociateLoginComponent {
  email: string = '';
  password: string = '';

  private loginUrl = 'http://localhost:8088/api/login';

  loginError: boolean = false; // Define the loginError property
  loginErrorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = {
      associateEmail: this.email,
      password: this.password
    };
  
    this.http.post(this.loginUrl, loginData).subscribe(
      (response: any) => {
        if (response && response.associateId) {
          
          console.log('Login successful', response);
  
         
          this.router.navigate(['/associateloginsuccess']);
        } else {
         
          console.error('Login failed', response);
          this.loginError = true;
          this.loginErrorMessage = 'Invalid credentials. Please try again.';
        }
      },
      (error) => {
        
        console.error('Login error', error);
      }
    );
  }
  
}