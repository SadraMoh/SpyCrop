import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BookBlockViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
