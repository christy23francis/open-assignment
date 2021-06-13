import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-landing',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.scss']
})
export class DashboardLandingComponent implements OnInit {
  income: any;
  expense: any;
  minVal: any;
  maxVal: any;
  defaultVal: any;
  isScrolled = false;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    if (window.scrollY > 120) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false
    }
  } 

  constructor() {
    this.minVal = 100000;
    this.maxVal = 300000;
    this.defaultVal = 10000;
    this.income = this.defaultVal;
    this.expense = this.defaultVal;
  }

  ngOnInit(): void {
  }
  public showVal(value: any) {
    this.income = value;
  }
}