import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild("cropper")
  cropper!: ElementRef<HTMLDivElement>

  el!: HTMLDivElement;
  
  ngAfterViewInit(): void {

    this.el = this.cropper.nativeElement;
    
    // Stop resizing if user stopped holding mousedown anywhere in the page
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', this.mouseMove);
      this.grabbedCorner = Corner.none;
    });


  }

  ngOnInit(): void {

  }

  // #region Corners

  grabbedCorner: Corner = Corner.none;

  public mouseMove(e: MouseEvent) {

    // console.clear();
    // console.table({ 'client': e.clientX + ' ' + e.clientY, 'window': e.pageX + ' ' + e.pageY, 'x,y': e.x + ' ' + e.y })

    console.log(e.clientX - this.el.offsetWidth + 'px');

    switch (this.grabbedCorner) {
      case Corner.topLeft:



        return
      //-
      case Corner.topRight:

        return
      //-
      case Corner.bottomRight:

        this.cropper.nativeElement.style.width = e.clientX - this.cropper.nativeElement.offsetLeft + 'px';

        return
      //-
      case Corner.bottomLeft:

        return
    }
  }

  tlDown() { window.addEventListener('mousemove', this.mouseMove); this.grabbedCorner = Corner.topLeft }

  trDown() { window.addEventListener('mousemove', this.mouseMove); this.grabbedCorner = Corner.topRight }

  brDown() { window.addEventListener('mousemove', this.mouseMove); this.grabbedCorner = Corner.bottomRight }

  blDown() { window.addEventListener('mousemove', this.mouseMove); this.grabbedCorner = Corner.bottomLeft }

  // #endregion Corners


}

enum Corner {
  none, topLeft, topRight, bottomRight, bottomLeft
}