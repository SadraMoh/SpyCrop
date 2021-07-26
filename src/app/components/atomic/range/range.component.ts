import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // check wether the iconClicked event has subscribers
    this.iconClickHasSubscribers = this.iconClick.observers.length > 0;

  };

  @Input("min")
  public min: number = -5;

  @Input("max")
  public max: number = 100;

  @Input("step")
  public step: number = 1;

  _value: number = 5;

  @Input("value")
  public set value(v: number) {

    // filter value before asigning it
    this._value = this.filterValue(v);

    if (!this.valueInput) return
    // force update input value
    this.valueInput.nativeElement.value = this._value + '';
    // resize value input to fit the value
    this.valueInput.nativeElement.style.width = this.valueInput.nativeElement.value.length + 'ch';
  }

  public get value(): number {
    return this._value;
  }

  /** Filter value before asigning it */
  filterValue(v: any): number {

    if (v == null)
      return this._value

    if (isNaN(v))
      return this._value

    if (v > this.max)
      v = this.max;

    if (v < this.min)
      v = this.min

    return v;
  }

  @Input("label")
  public label!: string;

  @Output("valueChange")
  valueChange: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild("valueInput")
  valueInput!: ElementRef<HTMLInputElement>;

  @Input("icon")
  public icon!: string;

  @Output("iconClick")
  public iconClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  iconClickHasSubscribers: boolean = false;

  iconClicked(e: MouseEvent): void {
    this.iconClick.emit(e);
  }

}