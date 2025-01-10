import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit{

  userForm: FormGroup
  disabled = false;
  max = 100;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  hide = true;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder){

    this.userForm = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
