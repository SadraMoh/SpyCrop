import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workbench-single-cam',
  templateUrl: './workbench-single-cam.component.html',
  styleUrls: ['./workbench-single-cam.component.scss']
})
export class WorkbenchSingleCamComponent implements OnInit {

  list = [
    { id: 0, name: 'banana'},
    { id: 1, name: 'apple'},
    { id: 2, name: 'carrots'},
    { id: 3, name: 'peach'},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
