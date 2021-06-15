import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workbench-single-cam',
  templateUrl: './workbench-single-cam.component.html',
  styleUrls: ['./workbench-single-cam.component.scss']
})
export class WorkbenchSingleCamComponent implements OnInit {

  pages: object[] = [{},{},{},{},{},{},{},{},{},]
  
  list = [
    { id: 0, name: 'banana' },
    { id: 1, name: 'apple' },
    { id: 2, name: 'carrots' },
    { id: 3, name: 'peach' },
    { id: 4, name: 'potato' },
    { id: 5, name: 'tomato' },
    { id: 6, name: 'leeks' },
    { id: 7, name: 'pomegranate' },
    { id: 8, name: 'strawberry' },
    { id: 9, name: 'blueberry' },
  ]

  e: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
