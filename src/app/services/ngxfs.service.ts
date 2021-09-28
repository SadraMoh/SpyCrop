import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxfsService {

  public fs!: object;

  constructor() {
    if (window.require) {
      try {
        this.fs = window.require('fs');
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron\'s IPC was not loaded');
    }
  }
}
