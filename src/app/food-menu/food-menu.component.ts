import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})

export class FoodMenuComponent {

  selectedIndex = 0;
  // plusminusButton: boolean = false;
  // count: number = 0

  viewTabs = [   
        {id: 1, name: 'Starters', content: 'Content 1'},
        {id: 2, name: 'Meals', content: 'Content 2'},
        {id: 3, name: 'Beverages', content: 'Content 3'},
      ]

      startersCardData = [
        {
          id: 1,
          dishTypeImg: 'assets/Icons/non-vegIcon.svg',
          dishName: 'Butter chicken',
          dishPrice: '200',
          dishImage: 'https://news24online.com/wp-content/uploads/2024/11/Butter-chicken.jpg',
          dishDescription:
            'The dish features marinated chicken that is grilled and then served in a thick, rich gravy. The sauce is made with tomato, butter, and a special spice blend.',
          count: 0,
          plusminusButton: false,
        },
        {
          id: 2,
          dishTypeImg: 'assets/Icons/non-vegIcon.svg',
          dishName: 'Chicken Tikka',
          dishPrice: '300',
          dishImage: 'https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg',
          dishDescription:
            'Chicken tikka is made by marinating small pieces of boneless chicken in yogurt and spices, then grilling them on skewers.',
          count: 0,
          plusminusButton: false,
        },
        {
          id: 3,
          dishTypeImg: 'assets/Icons/vegIcon.svg',
          dishName: 'Paneer Tikka',
          dishPrice: '200',
          dishImage: 'https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg',
          dishDescription:
            'Paneer tikka is made by marinating small pieces of paneer in yogurt and spices, then grilling them on skewers.',
          count: 0,
          plusminusButton: false,
        },
        {
          id: 4,
          dishTypeImg: 'assets/Icons/vegIcon.svg',
          dishName: 'Veg Crispy',
          dishPrice: '200',
          dishImage: 'https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg',
          dishDescription:
            'Paneer tikka is made by marinating small pieces of paneer in yogurt and spices, then grilling them on skewers.',
          count: 0,
          plusminusButton: false,
        },
      ];

      mealCardData = [
        {
          id: 1,
          dishTypeImg: 'assets/Icons/vegIcon.svg',
          dishName: 'Paneer Tikka',
          dishPrice: '200',
          dishImage: 'https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg',
          dishDescription:
            'Paneer tikka is made by marinating small pieces of paneer in yogurt and spices, then grilling them on skewers.',
          count: 0,
          plusminusButton: false,
        },

      ]

      beveragesCardData = [
        {
          id: 1,
          dishTypeImg: 'assets/Icons/non-vegIcon.svg',
          dishName: 'Chicken Tikka',
          dishPrice: '300',
          dishImage: 'https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg',
          dishDescription:
            'Chicken tikka is made by marinating small pieces of boneless chicken in yogurt and spices, then grilling them on skewers.',
          count: 0,
          plusminusButton: false,
        },
      ]
      

  constructor() {}

  onTabChange(index: number): void {
    this.selectedIndex = index;
  }

  onPlusMinusChange(action: string, dish: any): void {
    if(action === 'add'){
      dish.count = 1
      dish.plusminusButton = true;
    }
    else if (action === 'plus') {
      dish.count++;
    } else if (action === 'minus' && dish.count > 0) {
      dish.count--;

      if(dish.count == 0){
        dish.plusminusButton = false;
      }
    }
  }
  
}
