import {Directive, HostListener} from '@angular/core';
import {Router} from '@angular/router';
@Directive({
  selector: '[appRout3]'
})
export class Rout3Directive {
  constructor(private router: Router) { }
  // @HostListener('mouseWheelDown') routerDown() {
  //   this.router.navigate(['/two']);
  //   console.log(3);
  // }
  @HostListener('mouseWheelUp') routerUp() {
    setTimeout(() => {
    this.router.navigate(['/one']);
    console.log(4);
  }, 1500);
  }
}
