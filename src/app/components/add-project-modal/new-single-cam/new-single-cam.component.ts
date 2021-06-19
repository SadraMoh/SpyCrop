import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-new-single-cam',
  templateUrl: './new-single-cam.component.html',
  styleUrls: ['./new-single-cam.component.scss']
})
export class NewSingleCamComponent implements OnInit, AfterViewInit {

  name = new FormControl();

  constructor(private route: ActivatedRoute, private router: Router, private modalService: ModalService) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  validate(): void {

  }

  createClick(): void {
    this.validate();

    this.router.navigate([{ outlets: { primary: 'workbenchSingleCam', projectType: null } }]);
    this.modalService.callHide('artyom');
  }



}

