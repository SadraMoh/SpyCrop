import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {

  @Input()
  appModal: string = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appModal;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  constructor(
    private el: ElementRef
  ) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
