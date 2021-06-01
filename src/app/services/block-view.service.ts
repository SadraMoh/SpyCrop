import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockViewService {

  private _isGridView: boolean = true;

  public viewChanged = new EventEmitter<boolean>();

  public set isGridView(v: boolean) {
    this._isGridView = v;
    this.viewChanged.emit(this._isGridView);
  }

  public get isGridView(): boolean {
    return this._isGridView
  }


  constructor() { }

}
