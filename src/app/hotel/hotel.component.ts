import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [NzButtonComponent],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {
  router = inject(Router);

  navigateToHome() {
    this.router.navigate(['/']);
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
  navigateToUserInfo() {
    this.router.navigate(['/userInfo']);
  }
  navigateToUserOrder() {
    this.router.navigate(['/userOrder']);
  }
  navigateToHotelDetail() {
    this.router.navigate(['/hotelDetail']);
  }
}
