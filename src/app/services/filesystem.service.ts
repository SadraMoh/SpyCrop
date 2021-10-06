import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import * as fs from 'fs';
import * as Electron from 'electron';
import * as Path from 'path';

@Injectable({
  providedIn: 'root'
})
export class FilesystemService {

  public readonly folders = {
    /** CAUTION! Don't use this as an accessor */
    __dirname: this._electron.ipcRenderer.sendSync('__dirname'),
    __dbpath: Path.join(__dirname, 'db'),
    __temppath: Path.join(__dirname, 'temp'),
  }

  constructor(private _electron: ElectronService) {

    //#region if application folders don't exist, creat them

    for (const folder of Object.values(this.folders))
      if (!this.existsSync(folder))
        this.mkdir(folder);

    Object.freeze(this.folders);

    //#endregion

  }

  mkdir(path: string): void {
    this._electron.ipcRenderer.sendSync('mkdir', path);
  }

  existsSync(path: string): boolean {
    return this._electron.ipcRenderer.sendSync('existsSync', path)
  }

  writeFile(path: string, data: string = ''): void {
    this._electron.ipcRenderer.sendSync('writeFile', path, data);
  }

  readFile(path: string): Buffer {
    return this._electron.ipcRenderer.sendSync('readFile', path);
  }

  // @todo make this method async
  readdir(path: string): string[] {
    return this._electron.ipcRenderer.sendSync('readdir', path);
  }

  stat(path: string): fs.Stats {
    return this._electron.ipcRenderer.sendSync('stat', path);
  }

  openFolderDialog(): Electron.OpenDialogReturnValue {
    return this._electron.ipcRenderer.sendSync('openFolderDialog');
  }

}
