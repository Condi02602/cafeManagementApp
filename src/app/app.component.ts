import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cafeManagementApp';
  showSidenav: boolean = true

  constructor(private route: Router){}

  ngOnInit() :void{

    this.route.events.subscribe(() => {
      const currentRoute = this.route.url

      this.showSidenav = !(currentRoute === '/login' || currentRoute === '/signup')
    })
  }
}
