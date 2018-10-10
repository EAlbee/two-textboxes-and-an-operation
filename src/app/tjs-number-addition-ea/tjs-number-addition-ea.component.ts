import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-number-addition-ea',
  templateUrl: './tjs-number-addition-ea.component.html',
  styleUrls: ['./tjs-number-addition-ea.component.css']
})
export class TjsNumberAdditionEAComponent implements OnInit {

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
