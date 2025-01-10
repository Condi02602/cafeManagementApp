import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupPageComponent } from '../signup-page/signup-page.component';

@Component({
  selector: 'app-sidenav-section',
  templateUrl: './sidenav-section.component.html',
  styleUrls: ['./sidenav-section.component.css']
})
export class SidenavSectionComponent implements OnInit{

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openSignupForm(){
    this.dialog.open(SignupPageComponent,{
      width: '60%',
      height: '400px'
    })
  }

}
