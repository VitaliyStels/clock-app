const {app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
    const dayWidget = new BrowserWindow({
        width: 295,
        height: 120,
				transparent:true,
				frame:true,
				icon: __dirname + 'build/icon.png'
    })
    dayWidget.loadFile('./src/day-widget.html')
}

const createMenuWindow = () => {
	const menuWindow = new BrowserWindow({
		width: 400,
		height: 500,
		transparent: false,
		frame: true
	})
	menuWindow.loadFile('./src/menu-window.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
				else if (BrowserWindow.getAllWindows().length === 1) createMenuWindow()
    })

	// CMD + Q working
	globalShortcut.regirster('q', () => {
		app.quit();
	});

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
