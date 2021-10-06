import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input('boundryElement')
  boundry!: HTMLElement;

  @ViewChild("cropper")
  public cropper!: ElementRef<HTMLDivElement>

  /** Resize or move */
  @Output('transform')
  public transform: EventEmitter<void> = new EventEmitter<void>();

  public cropperX: number = 0;
  public cropperY: number = 0;

  _cropperWidth: number = 54;

  @Input('width')
  public set cropperWidth(v: number) {
    this.widthChange.emit(v);
    this._cropperWidth = v;
  }

  public get cropperWidth(): number {
    return this._cropperWidth;
  }

  @Output("widthChange")
  public widthChange: EventEmitter<number> = new EventEmitter<number>();

  _cropperHeight: number = 54;

  @Input('height')
  public set cropperHeight(v: number) {
    this.heightChange.emit(v);
    this._cropperHeight = v;
  }

  public get cropperHeight(): number {
    return this._cropperHeight;
  }

  @Output("heightChange")
  public heightChange: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {

    // Initalize mousemove observable
    this.mousemoveObservable$ = fromEvent(window, 'mousemove')

  }

  ngAfterViewInit(): void {
    this.boundry ??= document.body;
  }

  @HostListener('window:mouseup', ['$event'])
  windowMouseup(e: any) {

    // Stop resizing if user stopped holding mousedown anywhere in the page
    this.mousemoveSubscription$?.unsubscribe();

    this.mouseX = null;
    this.mouseY = null;

    this.grabbedCorner = Corner.none;

  }

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

    // Current left and top values
    // const cleft = Number.parseInt(el.style.left.substring(0, el.style.left.length - 2));
    // const ctop = Number.parseInt(el.style.top.substring(0, el.style.top.length - 2));
    // const cwidth = Number.parseInt(el.style.width.substring(0, el.style.width.length - 2));
    // const cheight = Number.parseInt(el.style.height.substring(0, el.style.height.length - 2));

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
}

enum Corner {
  none, topLeft, topRight, bottomRight, bottomLeft, top, right, bottom, left, center
}

enum Side {
  none, top, right, bottom, left, center
}