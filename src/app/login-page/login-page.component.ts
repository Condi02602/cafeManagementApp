import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  animal: any
  hide = true
  closeDialog: any

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCancel(){
    this.closeDialog = close();
  }
}


