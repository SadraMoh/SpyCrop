import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent implements OnInit {

  constructor() { }

  @Input('size')
  size: number = 200;

  @Input('thickness')
  thickness: number = 3;

  offset: number = 10;
  
  circumference!: number;

  ngOnInit(): void {
  }

}
