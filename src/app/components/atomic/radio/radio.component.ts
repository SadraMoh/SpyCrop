import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input("checked")
  public checked: boolean = false;

  @Input("value")
  public value: any = false;

  @Input("name")
  public name: string = "";

  @ViewChild("checkInput")
  input!: ElementRef<HTMLInputElement>;

  @Output("change")
  public change: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.addEventListener('change', () => { this.checked = this.input.nativeElement.checked; this.change.emit(this.checked); });
  }
  
}
