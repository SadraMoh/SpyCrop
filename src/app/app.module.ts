import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { BookBlockComponent } from './components/book-block/book-block.component';
import { WorkbenchSingleCamComponent } from './pages/workbench-single-cam/workbench-single-cam.component';
import { WorkbenchDoubleCamComponent } from './pages/workbench-double-cam/workbench-double-cam.component';
import { RecentComponent } from './pages/home/recent/recent.component';
import { BookmarksComponent } from './pages/home/bookmarks/bookmarks.component';
import { AllComponent } from './pages/home/all/all.component';
import { BookBlockViewerComponent } from './pages/home/book-block-viewer/book-block-viewer.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDirective } from './utilities/directives/modal.directive';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { AddProjectModalComponent } from './components/add-project-modal/add-project-modal.component';
import { NewSingleCamComponent } from './components/add-project-modal/new-single-cam/new-single-cam.component';
import { NewDoubleCamComponent } from './components/add-project-modal/new-double-cam/new-double-cam.component';
import { ComponentsComponent } from './pages/components/components.component';
import { CheckboxComponent } from './components/atomic/checkbox/checkbox.component';
import { RadioComponent } from './components/atomic/radio/radio.component';
import { TextboxComponent } from './components/atomic/textbox/textbox.component';
import { TextlineComponent } from './components/atomic/textline/textline.component';
import { ComboComponent } from './components/atomic/combo/combo.component';
import { PageSingleComponent } from './components/page-single/page-single.component';
import { CropperComponent } from './components/cropper/cropper.component';
import { RangeComponent } from './components/atomic/range/range.component';
import { DropComponent } from './components/atomic/drop/drop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewBookComponent,
    BookBlockComponent,
    WorkbenchSingleCamComponent,
    WorkbenchDoubleCamComponent,
    RecentComponent,
    BookmarksComponent,
    AllComponent,
    BookBlockViewerComponent,
    ModalContainerComponent,
    ModalComponent,
    ModalDirective,
    AddProjectModalComponent,
    NewSingleCamComponent,
    NewDoubleCamComponent,
    ComponentsComponent,
    CheckboxComponent,
    RadioComponent,
    TextboxComponent,
    TextlineComponent,
    ComboComponent,
    PageSingleComponent,
    CropperComponent,
    RangeComponent,
    DropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
