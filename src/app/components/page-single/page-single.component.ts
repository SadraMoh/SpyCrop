import { Component, Input, OnInit } from '@angular/core';
import { Image } from "src/app/models/image";

@Component({
  selector: 'app-page-single',
  templateUrl: './page-single.component.html',
  styleUrls: ['./page-single.component.scss']
})
export class PageSingleComponent implements OnInit {

  @Input('selected')
  public selected: boolean = false;

  @Input('image')
  public image!: Image;

  constructor() { }

  ngOnInit(): void {
  }

}
