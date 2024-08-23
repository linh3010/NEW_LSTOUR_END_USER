import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-user-order',
  standalone: true,
  imports: [NzButtonComponent],
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.css'
})
export class UserOrderComponent {
  router = inject(Router);

  navigateToHome() {
    this.router.navigate(['/']);
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
  navigateToUserInfo() {
    this.router.navigate(['/userInfo']);
  }
  navigateToUserOrder() {
    this.router.navigate(['/userOrder']);
  }
}
