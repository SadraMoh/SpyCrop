import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent implements OnInit {

  constructor() { }

  /** Between [min - max] */
  @Input("value")
  public _value: number = 50;

  public get value(): number {
    return this._value;
  }

  private filterValue(v: number): number {
    debugger;
    if (v <= this.min) return this.min;
    if (v >= this.max) return this.max;
    return v;
  }

  public set value(v: number) {

    this._value = this.filterValue(v);
    this.valueChange.emit(this._value);
  }

  @Output("valueChange")
  public valueChange: EventEmitter<number> = new EventEmitter<number>();

  @Input("max")
  public max: number = 100;

  @Input("min")
  public min: number = 0;
  
  @Input('size')
  public size: number = 200;

  @Input('thickness')
  public thickness: number = 3;

  offset: number = 10;

  get circumference(): number {
    return this.size * Math.PI;
  };

  get ratio(): number {
    return this.circumference * (this.value / (this.max - this.min))
  }
  
  get contentSize(): number {
    return (Math.sqrt(2) * this.size) / 2
  }

  ngOnInit(): void {

  }

}
