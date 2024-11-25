import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavSectionComponent } from './sidenav-section/sidenav-section.component';
import { MaterialModule } from './shared/material/material.module';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { CustomerBillComponent } from './customer-bill/customer-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavSectionComponent,
    FoodMenuComponent,
    CustomerBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
