const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(canvas);

//set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*
// Returns the HTMLCanvasElement object representing the canvas element with the specified ID.
// This allows you to manipulate the canvas in JavaScript, such as drawing shapes, images, and text.
// The object is CanvasRenderingContext2D is the canvas element itself, which can be used to access its properties and methods
* ctx holds all canvas methods and properties. 
*/
console.log(ctx); //Returns the 2D rendering context for the drawing surface of the canvas element.

//remove stretching of canvas objects
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = 'white'; // Sets the fill color for shapes drawn on the canvas.
    ctx.fillRect(10, 10, 150, 50);

});

ctx.fillStyle = 'white'; // Sets the fill color for shapes drawn on the canvas.
ctx.fillRect(10, 10, 150, 50);