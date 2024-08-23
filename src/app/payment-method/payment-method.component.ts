import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [NzButtonComponent],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css'
})
export class PaymentMethodComponent {
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
