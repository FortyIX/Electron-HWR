const electron = require('electron');
const {app, BrowserWindow, Menu, webContents} = require('electron');

const tf  = require('@tensorflow/tfjs');

const model_path = 'http://127.0.0.1:8080/hwr-model.json';

let window = null;
let model = null;

function createWindow(){
    window = new BrowserWindow({
        width: 450,
        height: 380,
        resizable: false,
        webPreferences :{
            nodeIntegration : true
        } 
    })


    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    window.loadFile('index.html')
}


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


app.whenReady().then(createWindow)




