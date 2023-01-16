const {app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
    const dayWidget = new BrowserWindow({
        width: 200,
        height: 120,
				transparent:true,
				frame:true,
				icon: __dirname + 'build/icon.png'
    })
    dayWidget.loadFile('./src/day-widget.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
