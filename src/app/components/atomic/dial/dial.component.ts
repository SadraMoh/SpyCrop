import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent implements OnInit, OnDestroy {

  constructor() { }

  /** Between [min - max] */
  @Input("value")
  public _value: number = 50;

  public get value(): number {
    return this._value;
  }

  private filterValue(v: number): number {
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

  @Input('customUI')
  public customUI: boolean = false;

  @Input('label')
  public label: string = 'Dial';

  get rotation(): number {
    return 360 * (this.value / (this.max - this.min));
  }

  offset: number = 10;

  get circumference(): number {
    return (this.size) * Math.PI;
  };

  get ratio(): number {
    return this.circumference * (this.value / (this.max - this.min))
  }

  get contentSize(): number {
    return (Math.sqrt(2) * this.size) / 2
  }

  @ViewChild('handle')
  handle!: ElementRef<SVGCircleElement>

  windowMouseMoveSub!: Subscription;
  windowMouseUpSub!: Subscription

  ngOnInit(): void {

    this.windowMouseMoveSub = fromEvent(window, 'mousemove').subscribe(e => this.windowMouseMove(e));
    this.windowMouseUpSub = fromEvent(window, 'mouseup').subscribe(e => this.windowMouseUp(e));

  }

  ngOnDestroy(): void {

    this.windowMouseMoveSub.unsubscribe();
    this.windowMouseUpSub.unsubscribe();

  }

  private isGrabbing = false;

  readonly mousepos = {
    x: 0,
    y: 0
  }

  handleMouseDown(e: any) {
    this.isGrabbing = true;

    this.mousepos.x = e.clientX;
    this.mousepos.y = e.clientY;
  }

  windowMouseUp(e: any) {
    this.isGrabbing = false;

    this.mousepos.x = this.handle.nativeElement.clientLeft;
    this.mousepos.y = this.handle.nativeElement.clientTop;
  }

  windowMouseMove(e: any) {
    if (!this.isGrabbing) return;

    this.value += (this.mousepos.x - e.clientX) * 0.3;

    this.mousepos.x = e.clientX;
    this.mousepos.y = e.clientY;

  }

}
