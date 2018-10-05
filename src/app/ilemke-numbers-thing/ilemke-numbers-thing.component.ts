import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilemke-numbers-thing',
  templateUrl: './ilemke-numbers-thing.component.html',
  styleUrls: ['./ilemke-numbers-thing.component.css']
})
export class ILemkeNumbersThingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  answer = '';

  addNumbers() {
    this.answer = this.n1 + " cat";
  }

  n1: string = "";
  n2: string = "";
}


}
