import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  constructor() { }

  private _value: string = "";

  @Input("value")
  public set value(v: string) {
    this._value = v;
    this.valueChange.emit(this._value);
  }

  public get value(): string {
    return this._value;
  }

  @Output("valueChange")
  public valueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input("label")
  public label!: string;

  @Input("name")
  public name!: string;

  @Input("placeholder")
  public placeholder: string = '';

  @Input("icon")
  public icon!: string;

  @Input("readonly")
  public readonly!: boolean;


  // generate an id for this instance if a label or placeholder is not present, used
  public guid: string = this.label?.replace(' ', '') || this.placeholder?.replace(' ', '') || "id" + Math.floor(Math.random() * 10000);

  @Output("iconClick")
  public iconClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  iconClickHasSubscribers: boolean = false;

  iconClicked(e: MouseEvent): void {
    this.iconClick.emit(e);
  }

  ngOnInit(): void {

    // check wether the iconClicked event has subscribers
    this.iconClickHasSubscribers = this.iconClick.observers.length > 0;
    
  }

}
