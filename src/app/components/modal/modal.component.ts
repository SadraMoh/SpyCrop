import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) {
    modalService.registerModalComponent(this);
  }

  /**
   * Emits when the modal has been shown
   */
  @Output("shown")
  public shown: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Emits when the modal has been hidden
   */
  @Output("shown")
  public hidden: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild("template")
  public template!: TemplateRef<any>;

  /**
   * The name to use when attempting to call a modal through `ModalService`
   */
  @Input("name")
  public name: string = '';

  show(): void {
    this.modalService.show(this);
  }

  hide(): void {
    this.modalService.hide(this);
  }
  
  ngOnInit(): void {
  }

}
