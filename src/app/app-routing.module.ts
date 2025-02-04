import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'signup', component: SignupPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'menu', component: FoodMenuComponent},
  {path: 'cart', component: CustomerCartComponent},
  {path: 'empInfo', component: EmpInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
