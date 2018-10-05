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
  public showCountDown: boolean;
  public interval: any;

  constructor() { }


  ngOnInit() {
    this.showCountDown = false;
  }

  public reverseString() {
    clearInterval(this.interval);
    this.countDown = 5;
    this.showCountDown = true;
    this.interval = setInterval(() => { 
      if (this.countDown >= 1) {
        this.myTimerFunction();
        this.showCountDown = true; 
      } else {
        this.showCountDown = false;
        clearInterval(this.interval);
      }
    }, 1000);
  }

  public myTimerFunction() {
    this.countDown--;
    if (this.countDown <= 0) {
      this.reversedString = this.getReversedString(this.stringToReverse);
    }
  }

  public getReversedString(stringToReverse: string) {
    return stringToReverse.split('').reverse().join('');
  }
  




}



