import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-number-addition',
  templateUrl: './tjs-number-addition.component.html',
  styleUrls: ['./tjs-number-addition.component.css']
})
export class TjsNumberAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = '?????!';

  multiplyNumbers() {
    this.answer = this.n1 * this.n2;
  }

  n1: number = 2;
  n2: number = 3;
}
