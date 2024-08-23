import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { OrderRoomComponent } from './order-room/order-room.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userInfo', component: UserInfoComponent },
  { path: 'userOrder', component: UserOrderComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'hotelDetail', component: HotelDetailComponent },
  { path: 'orderRoom', component: OrderRoomComponent },
  { path: 'paymentMethod', component: PaymentMethodComponent },
];
