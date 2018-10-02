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

  answer = 0;

  addNumbers() {
    this.answer += 1;
  }

}
