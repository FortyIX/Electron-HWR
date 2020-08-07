window.$ = window.jQuery = require('jquery');



//get the canvas for writing
const canvas = $(".writing-panel")[0]

const submit_btn = $(".submit-btn")
submit_btn.on("click", (e) =>{

    resetCanvas();

})
const context = canvas.getContext("2d");

//set the background color of the canvas to black
context.fillStyle = 'rgb(0,0,0)';
context.fillRect(0,0,300,300);


canvas.addEventListener('mousemove',(event) => {
    if(event.buttons === 1){
        const context = canvas.getContext("2d");
        context.fillStyle = 'rgb(255,255,255)';
        context.fillRect((event.offsetX-1), (event.offsetY-20), 10,10)
    }
});






