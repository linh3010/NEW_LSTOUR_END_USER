import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-order-room',
  standalone: true,
  imports: [NzButtonComponent],
  templateUrl: './order-room.component.html',
  styleUrl: './order-room.component.css'
})
export class OrderRoomComponent {
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
  navigateToPaymentMethod() {
    this.router.navigate(['/paymentMethod']);
  }

}
