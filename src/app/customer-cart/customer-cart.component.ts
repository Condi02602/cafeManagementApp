import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent {

  plusminusButton: any

  cardItems = [
    {id: 1, dishType: 'assets/Icons/non-vegIcon.svg',dishImage: 'https://news24online.com/wp-content/uploads/2024/11/Butter-chicken.jpg', dishName: 'Chicken Lollipop', dishPrice: '399', plusminusButton: false, count: 0},
    {id: 2, dishType: 'assets/Icons/non-vegIcon.svg',dishImage: 'https://news24online.com/wp-content/uploads/2024/11/Butter-chicken.jpg', dishName: 'Chicken Tikka', dishPrice: '359', plusminusButton: false, count: 0},
    {id: 3, dishType: 'assets/Icons/vegIcon.svg',dishImage: 'https://news24online.com/wp-content/uploads/2024/11/Butter-chicken.jpg', dishName: 'Paneer Tikka', dishPrice: '259', plusminusButton: false, count: 0},

  ]

  onPlusMinusButton(action: string, dish: any){
    if (action === 'plus') {
      dish.count++;
    } else if (action === 'minus') {
      dish.count--;
      if (dish.count <= 0) {
        this.cardItems = this.cardItems.filter(item => item.id !== dish.id); // Remove the row
      }
    }
  }

  getTotal(): number {
    return this.cardItems.reduce((total, dish) => {
      return total + dish.count * parseFloat(dish.dishPrice);
    }, 0);
  }

}
