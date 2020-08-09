const electron = require('electron');
const {app, BrowserWindow, Menu, webContents} = require('electron');

const tf  = require('@tensorflow/tfjs');


//define the main window
let window = null;


//created the main window
function createWindow(){
    window = new BrowserWindow({
        width: 450,
        height: 380,
        resizable: false,
        webPreferences :{
            nodeIntegration : true
        } 
    })

    //load the custom menu bar
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    //load main window UI file
    window.loadFile('index.html')
}


//define te custom menu bar
var template = [
  {
        label: 'Reset',
        click: function(){
        
            // Alternative method 
            // window.webContents.send('reset-signal','RESET THE CANVAS') 
               window.webContents.executeJavaScript(`
               resetCanvas()
             `)
           }
    }

    ,{
    label: 'Help',
    submenu: [ {
    label: 'About',
    role: 'about',
    submenu: [{
      label: 'About this app',
      
    }]},
      {
        label: 'Help',
        role: 'help',
      }]
}];


//render the main window
app.whenReady().then(createWindow)




