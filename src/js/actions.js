// const ipc = require('electron').ipcMain;
// ipc.on('reset-signal', function(e,m){
//     resetCanvas()
// })
model_path = 'http://127.0.0.1:8080/hwr-model.json';
const panel = $(".writing-panel")[0]
var model = null

function resetCanvas(){
    context.fillStyle = 'rgb(0,0,0)';
    context.fillRect(0,0,300,300);
}


async function predict(){
    model = await tf.loadLayersModel(model_path)
    console.log(model.name)
    const input = tf.tidy(() => {
        return tf.image.resizeBilinear(
            tf.browser.fromPixels(panel),
            [28, 28],
            true
        ).slice([0, 0, 0], [28, 28, 1])
        .toFloat()
        .div(255)
        .reshape([1, 28, 28, 1]);
    });
    const result = model.predict(input).argMax(1).dataSync()[0];
    $('.result').text(result)

    //alert(pred)
}