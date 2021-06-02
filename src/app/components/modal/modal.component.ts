import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
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

  @ViewChild("template")
  public template!: TemplateRef<any>;

  show(): void {
    this.modalService.show(this);
  }

  ngOnInit(): void {
  }

}
