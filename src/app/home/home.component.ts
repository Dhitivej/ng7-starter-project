import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toStyleH1: boolean = false;

  firstClick() {
    // if (this.toStyleH1 === false) {
    //   this.toStyleH1 = true;
    // } else if (this.toStyleH1 === true) {
    //   this.toStyleH1 = false;
    // }
    this.toStyleH1 = true;
  }
  constructor() {}

  ngOnInit() {}
}
