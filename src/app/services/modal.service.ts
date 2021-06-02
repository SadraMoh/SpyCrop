import { Component, ElementRef, EventEmitter, Injectable } from '@angular/core';
import { ModalContainerComponent } from '../components/modal-container/modal-container.component';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private isInitialized: boolean = false;
  container!: ModalContainerComponent;

  modals: ModalComponent[] = [];

  constructor() {

  }

  show(modal: ModalComponent): void {
    this.container.show(modal);
  }

  // This method registers the modal container
  registerModalContainer(component: ModalContainerComponent) {
    this.container = component;
    this.isInitialized = true;
  }

  registerModalComponent(component: ModalComponent) {
    this.modals.push(component);
  }

}
