const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d')
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event) {
    if (isDrawing) return;
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    ctx.beginPath(); 
    ctx.movoTo(lastX, lastsY);
    ctx.lineTo(event.offsetX, event.offset.Y);
    ctx.stroke();
    [lastX, lastY] = event.offsetX, event.offsetY;
}

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = event.offsetX, event.offsetY;
    console.log(lastX, lastY);
    console.log(isDrawing);
})

canvas.addEventListener('mousemove', draw)

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    console.log(isDrawing);
})

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
    console.log(isDrawing); 
})

clearButton.addEventListener('click', () => {
    ctx.clearReact(0, 0, canvas.width, canvas.height);
})