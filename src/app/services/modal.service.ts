import { Component, ElementRef, EventEmitter, Injectable } from '@angular/core';
import { ModalContainerComponent } from '../components/modal-container/modal-container.component';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private isInitialized: boolean = false;
  container!: ModalContainerComponent;

  public modal!: ModalComponent;

  public modalVisibilityStateChanged = new EventEmitter<boolean>();

  constructor() {

  }

  registerModalContainer(component: ModalContainerComponent) {
    this.container = component;
    this.isInitialized = true;
    // todo implement modal show
  }

  reg(modal: ModalComponent): void {
    this.modal = modal;
  }

  showModal(e: ElementRef) {
    if (!this.isInitialized) throw 'modal container is not initialized';


  }

}
