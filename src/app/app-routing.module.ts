import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectModalComponent } from './components/add-project-modal/add-project-modal.component';
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
      { path: 'workbenchSingleCam', component: WorkbenchSingleCamComponent, outlet: 'projectType' },
      { path: 'workbenchDoubleCam', component: WorkbenchDoubleCamComponent, outlet: 'projectType' },

    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
