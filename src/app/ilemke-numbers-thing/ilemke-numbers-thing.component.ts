import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilemke-numbers-thing',
  templateUrl: './ilemke-numbers-thing.component.html',
  styleUrls: ['./ilemke-numbers-thing.component.css']
})
export class ILemkeNumbersThingComponent implements OnInit {

  public countDown: number;
  public stringToReverse: string;
  public reversedString: string;

  constructor() { }


  ngOnInit() {
    this.countDown = 5;
  }

  public reverseString() {
    setInterval(() => { if (this.countDown > 0) this.myTimerFunction() }, 1000);
  }

  public myTimerFunction() {
    console.log('My timer function');
    this.countDown--;
    if (this.countDown <= 0) {
      this.reversedString = this.getReversedString(this.stringToReverse);
      console.log(this.countDown);
    }
  }

  public getReversedString(stringToReverse: string) {
    return stringToReverse.split('').reverse().join('');
  }
  




}



