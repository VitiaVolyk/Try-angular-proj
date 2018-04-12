import {Directive, HostListener} from '@angular/core';
import { Router } from '@angular/router';
@Directive({
  selector: '[appRout]'
})
export class RoutDirective {
  constructor(private router: Router) {
  }

  @HostListener('mouseWheelDown') routerDown() {
    setTimeout(() => {
    this.router.navigate(['/one']);
    console.log(0);
    }, 1500);
  }
}
