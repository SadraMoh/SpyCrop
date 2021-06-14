import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {

  constructor() { }

  @Input("value")
  public value: string = "";

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

  ngOnInit(): void {
  }

}
