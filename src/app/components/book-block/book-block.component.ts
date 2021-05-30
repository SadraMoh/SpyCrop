import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-block',
  templateUrl: './book-block.component.html',
  styleUrls: ['./book-block.component.scss']
})
export class BookBlockComponent implements OnInit {

  public model: any = { isFavourite: Math.random() > 0.5 }

  constructor() { }

  ngOnInit(): void {

  }

  toggleFavouriteClick(): boolean {
    this.model.isFavourite = !this.model.isFavourite;
    return this.model.isFavourite;
  }

}
