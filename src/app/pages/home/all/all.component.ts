import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit, AfterViewInit {

  constructor(
    private modalService: ModalService,
  ) { }

  @ViewChild("modal")
  public modal!: ModalComponent;

  ngAfterViewInit(): void {
    this.modalService.modal = this.modal;
  }

  ngOnInit(): void {

  }

}
