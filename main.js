const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const dayWidget = new BrowserWindow({
        width: 300,
        height: 290,
				transparent:true,
				frame:false,
				icon: __dirname + 'build/icon.png'
    })
    dayWidget.loadFile('./src/day-widget.html')
}


app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

	// CMD + Q working
	globalShortcut.regirster('q', () => {
		app.quit();
	});

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
