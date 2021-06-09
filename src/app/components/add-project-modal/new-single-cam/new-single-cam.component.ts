import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-single-cam',
  templateUrl: './new-single-cam.component.html',
  styleUrls: ['./new-single-cam.component.scss']
})
export class NewSingleCamComponent implements OnInit , AfterViewInit{

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngAfterViewInit(): void {
    console.log(this.name.value);
  }

  ngOnInit(): void {
  }

  createClick(): void {
    this.validateForms();
  }

  name = new FormControl('');

  validateForms(): boolean {
    console.log(this.name.value);
    return true;
  }

}
