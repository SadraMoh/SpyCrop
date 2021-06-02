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

  color: string = 'blue';

  constructor(
    public viewService: BlockViewService,
    private modaService: ModalService
  ) {

  }

  ngOnInit(): void {
  }

  viewStyleClick(): boolean {
    this.viewService.isGridView = !this.viewService.isGridView;
    return this.viewService.isGridView;
  }


  @ViewChild("modal")
  modal!: ModalComponent;

  addProjectClick(): void {
    this.modaService.callShow('artyom');
  }
}
