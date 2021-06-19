import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit {

  constructor() { }

  @Input('boundryElement')
  boundry!: HTMLElement;

  @ViewChild("cropper")
  public cropper!: ElementRef<HTMLDivElement>

  ngOnInit(): void {

    // Initalize mousemove observable
    this.mousemoveObservable$ = fromEvent(window, 'mousemove')
    this.moveRotateObservable$ = fromEvent(window, 'mousemove')

  }

  @HostListener('window:mouseup', ['$event'])
  windowMouseup(e: any) {

    // Stop resizing if user stopped holding mousedown anywhere in the page
    this.mousemoveSubscription$.unsubscribe();
    this.moveRotateSubscription$.unsubscribe();

    this.mouseX = null;
    this.mouseY = null;

    this.grabbedCorner = Corner.none;

  }

  public cropperWidth: number = 54;
  public cropperHeight: number = 54;

  mousemoveObservable$!: Observable<Event>
  mousemoveSubscription$!: Subscription

  // #region Corners

  /** The corner that is currently grabbed */
  public grabbedCorner: Corner = Corner.none;

  mouseX!: number | null;
  mouseY!: number | null;

  private readonly calibrator: number = 4;

  mouseMove(e: MouseEvent, sides: Side[] = [Side.none]) {

    // Initialize cached mouse lcoation
    this.mouseX ??= e.clientX;
    this.mouseY ??= e.clientY;

    // Get precise boundries and locations of items
    const el = this.cropper.nativeElement;
    const rect = el.getBoundingClientRect();
    const bound = this.boundry.getBoundingClientRect();

    // Restrict movement and scaling to the boundry
    if (e.clientX < bound.left) return;
    if (e.clientX > bound.right) return;
    if (e.clientY < bound.top) return;
    if (e.clientY > bound.bottom) return;

    // Calculate mouse disposition
    const deltaX = e.clientX - this.mouseX;
    const deltaY = e.clientY - this.mouseY;

    // Cache current mouse position for later calculation of disposition
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    if (sides.includes(Side.top)) {
      el.style.top = (rect.y + deltaY) - bound.y + 'px';
      el.style.height = rect.height - this.calibrator - deltaY + 'px';
    }

    if (sides.includes(Side.right)) {
      el.style.width = rect.width - this.calibrator + deltaX + 'px';
    }

    if (sides.includes(Side.bottom)) {
      el.style.height = rect.height - this.calibrator + deltaY + 'px';
    }

    if (sides.includes(Side.left)) {
      el.style.left = (rect.x + deltaX) - bound.x + 'px';
      el.style.width = rect.width - this.calibrator - deltaX + 'px';
    }

    if (sides.includes(Side.center)) {
      el.style.left = (rect.x + deltaX) - bound.x + 'px';
      el.style.top = (rect.y + deltaY) - bound.y + 'px';
    }

    // For depiction in the UI
    this.cropperWidth = rect.width;
    this.cropperHeight = rect.height;

  }

  tlDown() { this.sub2MouseMove([Side.top, Side.left]); this.grabbedCorner = Corner.topLeft }

  trDown() { this.sub2MouseMove([Side.top, Side.right]); this.grabbedCorner = Corner.topRight }

  blDown() { this.sub2MouseMove([Side.bottom, Side.left]); this.grabbedCorner = Corner.bottomLeft }

  brDown() { this.sub2MouseMove([Side.bottom, Side.right]); this.grabbedCorner = Corner.bottomRight }

  //-

  topDown() { this.sub2MouseMove([Side.top]); this.grabbedCorner = Corner.top }

  rightDown() { this.sub2MouseMove([Side.right]); this.grabbedCorner = Corner.right }

  bottomDown() { this.sub2MouseMove([Side.bottom]); this.grabbedCorner = Corner.bottom }

  leftDown() { this.sub2MouseMove([Side.left]); this.grabbedCorner = Corner.left }

  //-

  centerDown() { this.sub2MouseMove([Side.center]); this.grabbedCorner = Corner.center; }

  sub2MouseMove(sides: Side[] = [Side.none]): void {
    this.mousemoveSubscription$?.unsubscribe();
    this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt, sides));
  }

  // #endregion Corners

  moveRotateObservable$!: Observable<Event>
  moveRotateSubscription$!: Subscription

  rotateStartPointX: number = 0;
  rotateStartPointY: number = 0;

  cropperCenterX: number = 0;
  cropperCenterY: number = 0;

  /** Hypothenuse */
  distanceFromCenter: number = 0;

  rotateDown(e: MouseEvent): void {

    this.rotateStartPointX = e.clientX;
    this.rotateStartPointY = e.clientY;

    const rect = this.cropper.nativeElement.getBoundingClientRect();

    this.cropperCenterX = (rect.left + rect.right) / 2;
    this.cropperCenterY = (rect.top + rect.bottom) / 2;

    this.distanceFromCenter =
      Math.sqrt(Math.pow(this.cropperCenterX - this.rotateStartPointX, 2) + Math.pow(this.cropperCenterY - this.rotateStartPointY, 2))

    this.moveRotateSubscription$ = this.moveRotateObservable$.subscribe((evt: any) => this.moveRotateHandler(evt))
  }

  moveRotateHandler(e: MouseEvent): void {
    const distance = (e.clientX - this.rotateStartPointX);

    const deg = (Math.asin(distance / this.distanceFromCenter) * 180 * Math.PI);

    this.cropper.nativeElement.style.transform = `rotate(${deg}deg)`;

  }

}

enum Corner {
  none, topLeft, topRight, bottomRight, bottomLeft, top, right, bottom, left, center
}

enum Side {
  none, top, right, bottom, left, center
}