import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);

  navigateToHome() {
    this.router.navigate(['/']);
  }
  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}
