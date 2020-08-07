// const ipc = require('electron').ipcMain;

// ipc.on('reset-signal', function(e,m){
//     resetCanvas()
// })


function resetCanvas(){
    context.fillStyle = 'rgb(0,0,0)';
    context.fillRect(0,0,300,300);
}

