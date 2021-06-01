import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { BlockViewService } from 'src/app/services/block-view.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public modalService: ModalService,
    public viewService: BlockViewService
  ) {

  }

  ngOnInit(): void {
  }

  viewStyleClick(): boolean {
    this.viewService.isGridView = !this.viewService.isGridView;
    return this.viewService.isGridView;
  }

  @ViewChild("temp")
  private temp!: TemplateRef<any>;

  addProjectClick(): void {
    this.modalService.modal.template = this.temp;
  }

}
