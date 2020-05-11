import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  sidenavActions = new EventEmitter<string|MaterializeAction>();
  sidenavParams = [{edge: 'right', draggable: true}];

  constructor() { }

  ngOnInit() {}

}
