import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit, AfterViewInit {

  constructor() { }

  /**
   * The string written in the searchbox
   */
  @Input("value")
  public _value: string = "";

  public get value(): string {
    return this._value;
  }

  public set value(v: string) {
    this._value = v;
  }

  @Output("valueChange")
  public valueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input("label")
  public label!: string;

  @Input("name")
  public name!: string;

  @Input("placeholder")
  public placeholder: string = '';

  /**
   * The source 
   * @type { number[] | string[] | object[] }
   */
  @Input("ItemSource")
  public itemSource: any[] = [];

  /**
   * The key to use to retrive item names from a list of @type {object}
   */
  @Input("itemText")
  public itemText: string = '';


  // generate an id for this instance if a label or placeholder is not present, used
  public guid: string = this.label?.replace(' ', '') || this.placeholder?.replace(' ', '') || "id" + Math.floor(Math.random() * 10000);

  decideItemText(item: number | string | object): string {

    switch (typeof (item)) {
      case 'number':
        return item.toString();
      case 'string':
        return item;
      case 'object':
        return (item as any)[this.itemText];
      default:
        throw 'The type of an item or more was neither <number>, <string> nor <object>';
    }
  }

  /**
   * The Currently Selected Option
   */
  private _selectedItem!: number | string | object;

  @Input('selectedItem')
  public set selectedItem(v: number | string | object) {
    this._selectedItem = v;
    this.selectedItemChange.emit(this._selectedItem);
  }

  public get selectedItem(): number | string | object {
    return this._selectedItem;
  }

  /**
   * The source 
   * @type { EventEmitter<number> | EventEmitter<number>  | EventEmitter<object> }
   */
  @Output('selectedItemChange')
  public selectedItemChange: EventEmitter<any> = new EventEmitter<any>();

  caretClicked(): void {
    this.isItemsShown = !this.isItemsShown
  }

  itemClicked(item: number | string | object): void {
    this.selectedItem = item;
    this.isItemsShown = false
  }

  public isItemsShown: boolean = false;

  @ViewChild('combo')
  private combo!: ElementRef<HTMLDivElement>;

  searchInput(): void {
    this.isItemsShown = true;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Hide items if the user clicked outside t
    document.body.addEventListener('click', (e: any) => { if (!e.path.includes(this.combo.nativeElement)) this.isItemsShown = false });
  }


}
