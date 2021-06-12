import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-single-cam',
  templateUrl: './new-single-cam.component.html',
  styleUrls: ['./new-single-cam.component.scss']
})
export class NewSingleCamComponent implements OnInit, AfterViewInit {

  name = new FormControl();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  createClick(): void {
    console.log(this.name);
  }



}
