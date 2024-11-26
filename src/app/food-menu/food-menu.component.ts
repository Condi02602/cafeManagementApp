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

  viewTabs = [   
        {id: 1, name: 'First', content: 'Content 1'},
        {id: 2, name: 'Second', content: 'Content 2'},
        {id: 3, name: 'Third', content: 'Content 3'},
      ]

  cardData= [
    {id: 1, dishName:'Butter chicken', dishPrice: '200', dishImage: 'https://news24online.com/wp-content/uploads/2024/11/Butter-chicken.jpg', dishDescription: 'The dish features marinated chicken that is grilled and then served in a thick, rich gravy. The sauce is made with tomato, butter, and a special spice blend.'},
    {id: 2, dishName:'Chicken Tikka chakna', dishPrice: '300', dishImage: 'https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg', dishDescription: 'Chicken tikka is made by marinating small pieces of boneless chicken in yogurt and spices, then grilling them on skewers.' }
  ]

  constructor() {}

  onTabChange(tab?: any){
    this.selectedIndex = tab?.index;
  }

}
