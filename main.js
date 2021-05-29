const { app, BrowserWindow, Menu } = require('electron');

let win;

// try {
// 	require('electron-reloader')(module);
// } catch {}

function createWindow() {
    // Create the browser window
    win = new BrowserWindow({
        width: 1366,
        height: 786,
        backgroundColor: '#fefefe'
    })

    win.loadURL(`file://${__dirname}/dist/SpyCrop/index.html`);

    win.webContents.openDevTools()

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
