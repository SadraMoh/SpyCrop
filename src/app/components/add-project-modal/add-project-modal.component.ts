import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.scss']
})
export class AddProjectModalComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  selectedView: string = '';

  ngOnInit(): void {
    this.selectedView = this.route.snapshot.children.filter(i => i.routeConfig?.outlet === 'projectType')[0]?.routeConfig?.path || '';
    console.log(this.selectedView);
  }

  navToSingleCam() {
    this.router.navigate([{ outlets: { 'projectType': ['newSingleCam'] } }], { relativeTo: this.route.parent });
    this.selectedView = 'newSingleCam';
  }

  navToDoubleCam() {
    this.router.navigate([{ outlets: { 'projectType': ['newDoubleCam'] } }], { relativeTo: this.route.parent });
    this.selectedView = 'newDoubleCam';
  }

  navToMassEdit() {
    this.router.navigate([{ outlets: { 'projectType': ['newDoubleCam'] } }], { relativeTo: this.route.parent });
    this.selectedView = 'newMassEdit';
  }

}
