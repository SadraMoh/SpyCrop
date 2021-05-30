import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isViewGrid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  viewStyleClick(): boolean {
    this.isViewGrid = !this.isViewGrid;
    return this.isViewGrid;
  }

}
