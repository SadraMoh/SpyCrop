import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input("checked")
  public checked: boolean = false;

  @ViewChild("checkInput")
  input!: ElementRef<HTMLInputElement>;

  @Output("change")
  public change: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.addEventListener('change', () => this.change.emit(this.checked))
  }

}
