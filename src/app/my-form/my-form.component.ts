import { Component, HostListener, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  formModel = {
    email: ''
  };

  submit(form: FormGroup) {
    this.formModel = form.value;
    console.log(this.formModel);
  }
}


