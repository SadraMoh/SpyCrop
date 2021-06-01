import { Component, ElementRef, OnInit, ViewChild, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {

  
  constructor(
    private serveModal: ModalService,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  public oi() {

  }

  ngOnInit(): void {
  }

}
