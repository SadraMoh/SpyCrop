import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { WorkbenchDoubleCamComponent } from './pages/workbench-double-cam/workbench-double-cam.component';
import { WorkbenchSingleCamComponent } from './pages/workbench-single-cam/workbench-single-cam.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewBookComponent },
  { path: 'workbenchSingleCam', component: WorkbenchSingleCamComponent },
  { path: 'workbenchDoubleCam', component: WorkbenchDoubleCamComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
