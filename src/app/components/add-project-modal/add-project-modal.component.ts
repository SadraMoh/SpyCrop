import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.scss']
})
export class AddProjectModalComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  navToSingleCam() {
    this.router.navigate([{ outlets: { 'projectType': ['workbenchSingleCam'] } }], { relativeTo: this.route.parent });
  }

  navToDoubleCam() {
    this.router.navigate([{ outlets: { 'projectType': ['workbenchDoubleCam'] } }], { relativeTo: this.route.parent });
  }

  navToMassEditCam() {
    this.router.navigate([{ outlets: { 'projectType': ['workbenchSingleCam'] } }], { relativeTo: this.route.parent });
  }

}
