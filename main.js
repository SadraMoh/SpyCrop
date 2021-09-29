const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let win;

function createWindow() {
    // Create the browser window
    win = new BrowserWindow({
        width: 1400,
        height: 800,
        backgroundColor: '#fefefe',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        },
    })

    win.loadURL(`file://${__dirname}/dist/SpyCrop/index.html`);

    win.webContents.openDevTools()

    var menu = Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'New',
                    click() {
                        console.log(remote)
                    }
                },
                {
                    label: 'Open',
                    click() {
                        console.log(a)
                    }
                },
                {
                    label: 'Recent',
                    submenu: [
                        { label: 'New_Book' }
                    ]
                },
                {
                    label: 'Close'
                },
                { type: 'separator' },
                {
                    label: 'Exit',
                    click() {
                        app.exit();
                    }
                }
            ]
        },
        {
            label: 'Devtools',
            click() {
                win.webContents.openDevTools()
            }
        }
    ])

    Menu.setApplicationMenu(menu);

    win.on('closed', () => {
        win = null
    });
}

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

ipcMain.on('__dirname', (event) => {
    event.returnValue = __dirname;
});

ipcMain.on('mkdir', (_, path) => {
    fs.mkdir(path, (_) => { });
})

ipcMain.on('existsSync', (event, path) => {

    event.returnValue = fs.existsSync(path);

})

ipcMain.on('writeFile', (event, path, data) => {

    fs.writeFile(path, data, (err) => {

        if (err) throw err;

        event.returnValue = true;
    });
})

ipcMain.on('readFile', (event, path) => {

    fs.readFile(path, (err, data) => {

        if (err) throw err;

        event.returnValue = data;
    });
})

ipcMain.on('readdir', (event, path) => {

    fs.readdir(path, (err, data) => {

        if (err) throw err;

        event.returnValue = data;
    });
})

ipcMain.on('stat', (event, path) => {

    fs.stat(path, (err, stats) => {

        if (err) throw err;

        event.returnValue = stats;

    });

})

ipcMain.on('openFolderDialog', async (event) => {

    event.returnValue = await dialog.showOpenDialog(win, {

        properties: ['openDirectory']

    });

})
