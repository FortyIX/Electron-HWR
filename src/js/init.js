const tf  = require('@tensorflow/tfjs');
window.$ = window.jQuery = require('jquery');



//get the canvas for writing
const canvas = $(".writing-panel")[0]

$('.submit-btn').click( () => {
    
    //if (isModelLoaded ? predict(model) : alert("THe model is not yet loaded, please load the model from the left top menu"));
    predict()
})
const context = canvas.getContext("2d");

//set the background color of the canvas to black
context.fillStyle = 'rgb(0,0,0)';
context.fillRect(0,0,300,300);

//add the event linstener in response to the drawing event
canvas.addEventListener('mousemove',(event) => {
    if(event.buttons === 1){
        const context = canvas.getContext("2d");
        context.fillStyle = 'rgb(255,255,255)';
        context.fillRect((event.offsetX-1), (event.offsetY-20), 10,10)
    }
});






