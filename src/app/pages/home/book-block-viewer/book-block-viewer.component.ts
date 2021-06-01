import { Component, OnInit } from '@angular/core';
import { BlockViewService } from 'src/app/services/block-view.service';

@Component({
  selector: 'app-book-block-viewer',
  templateUrl: './book-block-viewer.component.html',
  styleUrls: ['./book-block-viewer.component.scss']
})
export class BookBlockViewerComponent implements OnInit {

  public isGridView: boolean = true;

  constructor(private viewService: BlockViewService) {
    this.isGridView = viewService.isGridView;
    viewService.viewChanged.subscribe(view => this.isGridView = view);
  }

  ngOnInit(): void {
  }

}
