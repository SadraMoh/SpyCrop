import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { FilesystemService } from 'src/app/services/filesystem.service';
import * as Path from 'path';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor(public fs: FilesystemService) {

  }

  ngOnInit(): void {
    // if (this._electron.isElectronApp) {
    //   this._electron.ipcRenderer.on('pong', (event, arg) => {
    //     console.log(
    //       'RECEIVED RESPONSE FROM ELECTRON TO ANGULAR APP',
    //       event,
    //       arg
    //     );
    //   });
    // }
  }

  readfs() {

    // console.log({
    //   dir: this.fs.folders.__dbpath,
    //   db: this.fs.folders.__dbpath,
    //   temp: this.fs.folders.__temppath,
    // });


    console.log(this.fs.stat(Path.join('C:\\Users\\Sadegh\\Desktop\\pictest', 'book.jpg')));

  }

}
