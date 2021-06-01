import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input("template")
  public template!: TemplateRef<any>;

  ngOnInit(): void {
  }

}
