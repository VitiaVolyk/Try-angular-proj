import {Directive, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appRout2]'
})
export class Rout2Directive {
  constructor(private router: Router) {
  }

  @HostListener('mouseWheelDown') routerDown() {
    setTimeout(() => {
      this.router.navigate(['/two']);
      console.log(1);
    }, 1500);
  }

  @HostListener('mouseWheelUp') routerUp() {
    setTimeout(() => {
      this.router.navigate(['/']);
      console.log(2);
    }, 1500);
  }
}
