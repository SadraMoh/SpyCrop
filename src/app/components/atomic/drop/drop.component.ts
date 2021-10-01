import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { promises } from 'dns';
import { fromEvent, Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})
export class DropComponent implements AfterViewInit, OnDestroy {

  /** Top level element in this components Template */
  @ViewChild('top')
  top!: ElementRef<HTMLElement>;

  /** Hot element */
  host!: HTMLElement;

  /** The element to stick to*/
  @Input("parent")
  parent!: HTMLElement

  @Input("direction")
  direction: Direction = Direction.br;

  /** How far should the drop element be from its [parent] */
  @Input("offset")
  offset: number = 12;

  /** Is the drop element shown */
  public isShown: boolean = false;

  /** Event for showing and hiding the drop */
  @Input("mode")
  mode: 'hover' | 'click' | 'right-click' = 'hover';

  /** Subscription to window click */
  clickListenerSub!: Subscription;

  parentMouseEnterSub!: Subscription;
  parentMouseLeaveSub!: Subscription;

  constructor() { }

  ngOnDestroy(): void {
    this.clickListenerSub?.unsubscribe();
    this.parentMouseEnterSub?.unsubscribe();
    this.parentMouseLeaveSub?.unsubscribe();
  }

  ngAfterViewInit(): void {

    if (!this.parent)
      throw new Error("A reference to the [parent] element was not assigned");

    this.host = this.top.nativeElement.parentElement as HTMLElement;
    this.host.style.position = 'absolute';

    // Assign an event listener to check wether the user clicked on or outside the parent 
    this.clickListenerSub = fromEvent(window, 'click').subscribe((e: any) => {
      if (e.path.includes(this.parent))
        // clicked on parent
        this.parentClick(e);
      else if (e.path.includes(this.host))
        // clicked on the drop element
        this.hostClick(e);
      else
        // clicked outside both the parent and drop elements
        this.outsideClick(e);
    });

    this.parentMouseEnterSub = fromEvent(this.parent, 'mouseenter').subscribe((e: any) => {
      this.parentEnter(e);
    });

    this.parentMouseLeaveSub = fromEvent(this.parent, 'mouseleave').subscribe((e: any) => {
      this.parentLeave(e);
    });

  }

  hideTimerSub!: Subscription;
  readonly delayBeforeHide: number = 1000;

  //- Parent
  private parentLeave(e: any) {
    if (this.mode === 'hover') 
      // Start Countdown to hide
      this.hideTimerSub = timer(this.delayBeforeHide).subscribe(_ => this.hide());
  }

  private parentEnter(e: any) {
    // Cancel Countdown to hide
    this.hideTimerSub?.unsubscribe();

    if (this.mode === 'hover')
      this.show();
  }

  /** Assigned in afterViewInit */
  private parentClick(e: Event): void {
    this.show();
  }

  //- Host (Subscribed in HTMLTemplate)
  hostLeave(e: any) {
    if (this.mode === 'hover') 
      // Start Countdown to hide
      this.hideTimerSub = timer(this.delayBeforeHide).subscribe(_ => this.hide());
  }

  hostEnter(e: any) {
    // Cancel Countdown to hide
    this.hideTimerSub?.unsubscribe();
  }

  /** Assigned in afterViewInit */
  private hostClick(e: Event): void {
  }

  //- Outside
  /** Assigned in afterViewInit */
  private outsideClick(e: Event): void {
    this.hide();
  }


  readonly fadeAnimationTime = 320;

  public show(): Promise<void> {

    this.isShown = true;

    this.adjustToParent();

    return new Promise((resolve, reject) => {
      // animation

      setTimeout(() => {
        // animation finished
        return resolve();
      }, this.fadeAnimationTime);
    });
  }

  public hide(): Promise<void> {

    this.isShown = false;

    return new Promise((resolve, reject) => {

      // animation

      setTimeout(() => {
        // animation finished
        return resolve();
      }, this.fadeAnimationTime);
    });
  }

  selfLeft: number = 0;
  selfTop: number = 0;

  /** Align self to [parent] element according to the selected [direction] */
  adjustToParent() {

    // WARNING if both of the elements don't have the same offsetParent, there will surely be misalignments
    if (this.host.offsetParent !== this.parent.offsetParent)
      console.warn('[Drop] elements [offsetParent] property is not the same as its parents',
        { drop: this, parent: this.parent }
      );

    /** Parent Rectangle */
    const prect = this.parent.getClientRects()[0];

    /** Parent Specs */
    const p = {
      x: this.parent.offsetLeft,
      y: this.parent.offsetTop,
      width: prect.width,
      height: prect.height
    }

    /** host Rectangle */
    const srect = this.parent.getClientRects()[0];

    /** host Specs */
    const h = {
      x: this.host.offsetLeft,
      y: this.host.offsetTop,
      width: srect.width,
      height: srect.height
    }

    /** host Width */
    const swidth = this.host.getBoundingClientRect().width;

    switch (this.direction) {
      case Direction.tl:
        break;
      case Direction.tc:

        break;
      case Direction.tr:

        break;
      case Direction.ml:

        break;
      case Direction.mr:

        break;
      case Direction.bl:

        break;
      case Direction.bc:

        break;
      case Direction.br:
        this.selfLeft = p.x;
        this.selfTop = h.height + this.offset;
        break;
    }

  }
}

/** 
 * The direction the drop element should be placed relative to its parent element
 * @example
 * tl    tc    tr
 * ml [Parent] mr
 * bl    bc    br
 */
export enum Direction {
  tl, tc, tr,
  ml, mr,
  bl, bc, br
}


