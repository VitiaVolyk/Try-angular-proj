import {Component, OnInit} from '@angular/core';

import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    trigger('heroState', [
      state('0', style({
        top: -212
      })),
      state('1', style({
        top: 0
      })),
      transition('0 => 1', animate('4s 0s ease-in-out'))
      // transition('1 => 0', animate('3s 3s ease', style({
      //   transform: 'translateY(0px)'})))
    ])]
})
export class IntroComponent implements OnInit {
  arr1 = [
    'MODERN',
    'DESIGN',
    'AGENCY'
  ];
  arr2 = [
    '&',
    '&',
    '&'
  ];
  arr3 = [
    'CREATIVE WEB & APP',
    'CREATIVE DIGITAL',
    'BUSINESS DESIGN'
  ];
  arr4 = [
    'DEVELOPMENT.',
    'WEB SOLUTIONS.',
    'STRATEGYS.'
  ];
  title1: string;
  title21: string;
  title2: string;
  title22: string;
  title3: string;
  title23: string;
  title4: string;
  title24: string;
  title33: string;
  index = 0;
  index2 = 1;
  index3 = 0;
  index4 = 0;
  n = 4000;
  triggerIndex = '0';
  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.index4++;
    }, 6000);
    if (this.index4 !== 0) {
      this.n = 8000;
    }
    if (this.index4 === 2) {
      this.index4 = 1;
    }
    this.title1 = this.arr1[0];
    this.title21 = this.arr1[1];
    this.title2 = this.arr2[0];
    this.title22 = this.arr2[1];
    this.title3 = this.arr3[0];
    this.title23 = this.arr3[1];
    this.title4 = this.arr4[0];
    this.title24 = this.arr4[1];
    setInterval(() => {
      this.title1 = this.arr1[this.index];
      this.title21 = this.arr1[this.index2];
      this.title2 = this.arr2[this.index];
      this.title22 = this.arr2[this.index2];
      this.title3 = this.arr3[this.index];
      this.title23 = this.arr3[this.index2];
      this.title4 = this.arr4[this.index];
      this.title24 = this.arr4[this.index2];
      this.index++;
      this.index2++;
      if (this.index === 3) {
        this.index = 0;
      }
      if (this.index2 === 3) {
        this.index2 = 0;
      }
    }, 8000);
    this.triggerIndex = '0';
    setInterval(() => {
      this.triggerIndex = this.index3.toString();
      this.index3++;
      if (this.index3 === 2) {
        this.index3 = 0;
      }
    }, this.n);
  }
}

