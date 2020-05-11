import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-preloader-circle',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})


export class PreloaderCircleComponent {

  @Input() size: string; // big
  @Input() width: string = null; // 50px
  @Input() border: string = null; // 1px

  constructor() { }

}
