const { app, BrowserWindow, Menu, shell } = require('electron');

let win;

function createWindow() {
    // Create the browser window
    win = new BrowserWindow({
        width: 1366,
        height: 786,
        backgroundColor: '#fefefe',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation : false
        },
    })

    win.loadURL(`file://${__dirname}/dist/SpyCrop/index.html`);

    var menu = Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'New'
                },
                { label: 'Open' },
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
