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

  }

  @HostListener('window:mouseup', ['$event'])
  windowMouseup(e: any) {

    // Stop resizing if user stopped holding mousedown anywhere in the page
    this.mousemoveSubscription$.unsubscribe();
    this.grabbedCorner = Corner.none;

  }

  public cropperWidth: number = 54;
  public cropperHeight: number = 54;

  mousemoveObservable$!: Observable<Event>
  mousemoveSubscription$!: Subscription

  // #region Corners

  /** The corner that is currently grabbed */
  grabbedCorner: Corner = Corner.none;



  mouseMove(e: MouseEvent) {

    const calibrator: number = 4;
    const bound = this.boundry.getBoundingClientRect();

    const el = this.cropper.nativeElement;
    let rect = el.getBoundingClientRect();

    const centralDistanceX: number = e.clientX - rect.x;
    const centralDistanceY: number = e.clientY - rect.y;
    
    // console.log('cursor', e.clientX + ' ' + e.clientY)
    // console.log(rect);

    if (e.clientX < bound.left) return;
    if (e.clientX > bound.right) return;
    if (e.clientY < bound.top) return;
    if (e.clientY > bound.bottom) return;


    switch (this.grabbedCorner) {
      case Corner.top:
        el.style.top = e.clientY - bound.y + 'px';
        el.style.height = rect.height - calibrator - (e.clientY - rect.y) + 'px';
        break
      //-
      case Corner.right:
        el.style.width = e.clientX - rect.left + 'px';
        break
      //-
      case Corner.bottom:
        el.style.height = e.clientY - rect.top + 'px';
        break
      //-
      case Corner.left:
        el.style.left = e.clientX - bound.x + 'px';
        el.style.width = rect.width - calibrator - (e.clientX - rect.x) + 'px';
        break
      //-
      case Corner.topLeft:
        el.style.top = e.clientY - bound.y + 'px';
        el.style.height = rect.height - calibrator - (e.clientY - rect.y) + 'px';
        el.style.left = e.clientX - bound.x + 'px';
        el.style.width = rect.width - calibrator - (e.clientX - rect.x) + 'px';
        break
      //-
      case Corner.topRight:
        el.style.top = e.clientY - bound.y + 'px';
        el.style.height = rect.height - calibrator - (e.clientY - rect.y) + 'px';
        el.style.width = e.clientX - rect.left + 'px';
        break
      //-
      case Corner.bottomRight:
        el.style.height = e.clientY - rect.top + 'px';
        el.style.width = e.clientX - rect.left + 'px';
        break
      //-
      case Corner.bottomLeft:
        el.style.height = e.clientY - rect.top + 'px';
        el.style.left = e.clientX - bound.x + 'px';
        el.style.width = rect.width - calibrator - (e.clientX - rect.x) + 'px';
        break
      //-
      case Corner.center:
        el.style.top = e.clientY + centralDistanceY - bound.y + 'px';
        el.style.left = e.clientX + centralDistanceX - bound.x + 'px';
        break

    }

    rect = el.getBoundingClientRect();
    this.cropperWidth = rect.width;
    this.cropperHeight = rect.height;

  }

  tlDown() { this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt)); this.grabbedCorner = Corner.topLeft }

  trDown() { this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt)); this.grabbedCorner = Corner.topRight }

  brDown() { this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt)); this.grabbedCorner = Corner.bottomRight }

  blDown() { this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt)); this.grabbedCorner = Corner.bottomLeft }

  //-

  topDown() { this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt)); this.grabbedCorner = Corner.top }

  rightDown() { this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt)); this.grabbedCorner = Corner.right }

  bottomDown() { this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt)); this.grabbedCorner = Corner.bottom }

  leftDown() { this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt)); this.grabbedCorner = Corner.left }

  //-

  centerDown() { this.mousemoveSubscription$ = this.mousemoveObservable$.subscribe((evt: any) => this.mouseMove(evt)); this.grabbedCorner = Corner.center;  }

  // #endregion Corners


}

enum Corner {
  none, topLeft, topRight, bottomRight, bottomLeft, top, right, bottom, left, center
}