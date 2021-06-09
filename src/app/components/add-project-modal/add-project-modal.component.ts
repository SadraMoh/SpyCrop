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

  selectedView: string = 'workbenchSingleCam';

  navToSingleCam() {
    this.router.navigate([{ outlets: { 'projectType': ['newSingleCam'] } }], { relativeTo: this.route.parent });
    this.selectedView = 'workbenchSingleCam';
  }

  navToDoubleCam() {
    this.router.navigate([{ outlets: { 'projectType': ['newDoubleCam'] } }], { relativeTo: this.route.parent });
    this.selectedView = 'workbenchDoubleCam';
  }

  navToMassEdit() {
    this.router.navigate([{ outlets: { 'projectType': ['newDoubleCam'] } }], { relativeTo: this.route.parent });
    this.selectedView = 'workbenchDoubleCams';
  }

}
