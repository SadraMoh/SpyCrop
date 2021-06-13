import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectModalComponent } from './components/add-project-modal/add-project-modal.component';
import { NewDoubleCamComponent } from './components/add-project-modal/new-double-cam/new-double-cam.component';
import { NewSingleCamComponent } from './components/add-project-modal/new-single-cam/new-single-cam.component';
import { ComponentsComponent } from './pages/components/components.component';
import { AllComponent } from './pages/home/all/all.component';
import { BookmarksComponent } from './pages/home/bookmarks/bookmarks.component';
import { HomeComponent } from './pages/home/home.component';
import { RecentComponent } from './pages/home/recent/recent.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { WorkbenchDoubleCamComponent } from './pages/workbench-double-cam/workbench-double-cam.component';
import { WorkbenchSingleCamComponent } from './pages/workbench-single-cam/workbench-single-cam.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      // { path: '', redirectTo: 'Recent', pathMatch: 'full' },
      { path: '', redirectTo: 'Components', pathMatch: 'full' },
      { path: 'Recent', component: RecentComponent },
      { path: 'Bookmarks', component: BookmarksComponent },
      { path: 'All', component: AllComponent },
      { path: 'Components', component: ComponentsComponent },

      //- Aux Routes
      { path: 'newSingleCam', component: NewSingleCamComponent, outlet: 'projectType' },
      { path: 'newDoubleCam', component: NewDoubleCamComponent, outlet: 'projectType' },

    ]
  },
  //- Workbench
  { path: 'workbenchSingleCam', component: WorkbenchSingleCamComponent },
  { path: 'workbenchDoubleCam', component: WorkbenchDoubleCamComponent },

  //- Wildcard
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
