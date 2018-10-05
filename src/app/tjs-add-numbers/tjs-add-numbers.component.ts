import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-add-numbers',
  templateUrl: './tjs-add-numbers.component.html',
  styleUrls: ['./tjs-add-numbers.component.css']
})
export class TjsAddNumbersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = '';

  addNumbers() {
    this.answer = this.n1 + this.n2;
  }

  n1: string = "";
  n2: string = "";
}
