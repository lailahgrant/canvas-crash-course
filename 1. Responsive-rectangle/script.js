const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(canvas);

//set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//remove stretching of canvas objects
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = 'white'; // Sets the fill color for shapes drawn on the canvas.
    ctx.fillRect(10, 10, 150, 50);

});

ctx.fillStyle = 'white'; // Sets the fill color for shapes drawn on the canvas.
ctx.fillRect(10, 10, 150, 50);