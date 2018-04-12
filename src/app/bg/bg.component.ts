import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.css']
})
export class BgComponent implements OnInit {
  @ViewChild('myVideo')vp: any;
  BP = 'Pause';
  BM = 'Mute';
  constructor() { }
  ngOnInit() {
  }
  myFP(event: any) {
    console.log(this.vp.nativeElement.muted)
    if (this.vp.nativeElement.paused) {
      this.vp.nativeElement.play();
      this.BP = 'Pause';
    } else {
      this.vp.nativeElement.pause();
      this.BP = 'Play';
    }
  }
  myFM(event: any) {
    console.log(this.vp.nativeElement.muted)
    if (this.vp.nativeElement.muted === false) {
      this.vp.nativeElement.muted = true;
      this.BM = 'Unmute';
    } else {
      this.vp.nativeElement.muted = false;
      this.BM = 'Mute';
    }
  }
}
