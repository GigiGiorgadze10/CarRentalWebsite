import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isSignInMode = true;
  errorMessage: string = '';

  toggleForm(): void {
    this.isSignInMode = !this.isSignInMode;
    this.errorMessage = '';
  }

  handleSignIn(email: string, password: string): void {
    this.errorMessage = '';
    if (!email || !password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    this.authService.login(email, password).subscribe({
      next: (response) => {
        alert('Sign-In Successful!');
        this.router.navigate(['/dashboard']); // Redirect to dashboard or desired route
      },
      error: (err) => {
        this.errorMessage = 'Invalid email or password.';
      },
    });
  }

  handleSignUp(name: string, email: string, password: string, confirmPassword: string): void {
    this.errorMessage = '';
    if (!name || !email || !password || !confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    if (!this.isValidEmail(email)) {
      this.errorMessage = 'Invalid email format.';
      return;
    }

    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.authService.register(name, email, password).subscribe({
      next: () => {
        alert('Sign-Up Successful! You can now Sign In.');
        this.isSignInMode = true;
      },
      error: (err) => {
        this.errorMessage = 'Registration failed. Please try again.';
      },
    });
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
