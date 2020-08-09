// const ipc = require('electron').ipcMain;
// ipc.on('reset-signal', function(e,m){
//     resetCanvas()
// })

//the path to the model 
model_path = 'http://127.0.0.1:8080/hwr-model.json';

//query the writing panel 
const panel = $(".writing-panel")[0]

var model = null

/**
 * function that reset the cancas (writing panel)
 * 
 */
function resetCanvas(){
    context.fillStyle = 'rgb(0,0,0)';
    context.fillRect(0,0,300,300);
}


/**
 * function to make the prediction on handwriting
 * it is a async function to prevent UI freezing 
 */
async function predict(){

    //load the model 
    model = await tf.loadLayersModel(model_path)
    
    const input = tf.tidy(() => {
        //retrieve the handwriting as tensor 
        //convert from canvas image and reshaped to desired format
        return tf.image.resizeBilinear(
            tf.browser.fromPixels(panel),
            [28, 28],
            true
        ).slice([0, 0, 0], [28, 28, 1])
        .toFloat()
        .div(255)
        .reshape([1, 28, 28, 1]);
    });

    //make the prediction
    const result = model.predict(input).argMax(1).dataSync()[0];
    $('.result').text(result)

    //alert(pred)
}