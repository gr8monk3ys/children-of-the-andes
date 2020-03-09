const {app, BrowserWindow} = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('./client/index.html')
  //Option to open dev tools on start:
  //win.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if(BrowserWindow.getAllWindows().length == 0) {
    createWindow();
  }
})
