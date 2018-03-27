import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'elbil-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
