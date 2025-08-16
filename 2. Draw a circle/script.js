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

});

ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.lineWidth = 5; //set the width of the stroke
// Draw a circle
//arc() is used to create a circle or an arc or semicircle

// beginPath() - to drawlines, arcs, or curves.
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
//Math.PI * 2 converts to 360 degrees - which is the entire circle.
//ctx.fill(); //fill the circle with white color
ctx.stroke(); //draw the outline of the circle