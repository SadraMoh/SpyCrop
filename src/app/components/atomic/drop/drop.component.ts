import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { promises } from 'dns';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})
export class DropComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    console.log(this.parent);

    if (!this.parent)
      throw new Error("A reference to the [parent] element was not assigned");

    // Assign an event listener to check wether the user clicked on or outside the parent 
    fromEvent(window, 'click').subscribe((e: any) => !e.path.includes(this.parent) ? this.parentClick(e) : this.outsideClick(e))

  }

  parentClick(e: Event): void {

  }

  outsideClick(e: Event): void {

  }

  public hide(): Promise<void> {
    return new Promise((resolve, reject) => {

      // animation
      
      setTimeout(() => {
        // animation finished
        return resolve();
      }, 300);
    });
  }

  /** The element to stick to*/
  @Input("parent")
  parent!: HTMLElement



}
