import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [NzButtonComponent],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css'
})
export class HotelDetailComponent {
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
  navigateToOrderRoom() {
    this.router.navigate(['/orderRoom']);
  }
}
