import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  constructor() { }

  min: number = 0;
  max: number = 10;

  @Input("value")
  value: number = 5 ;

  @Output("valueChange")
  valueChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

}
