# Canvas Basics :art: :grin:


Use `<canvas></canvas>` tag that was introduced in HTML5
> It  is a special kind  of tag that  creates a field, canvas  that wwe  can  use to   draw interactive graphics with Javascript.

> By  default,  canvas is transparent so you can layer multiple canvas elements on top of  each other if you like.
> 
- [x] Layering might be useful for projects like; 
  - [x] Games
  - [x] When you want SVG filters to apply only to certain elements

### Draw on Canvas using JavaScript

```javascript
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(canvas);

/*
// Returns the HTMLCanvasElement object representing the canvas element with the specified ID.
// This allows you to manipulate the canvas in JavaScript, such as drawing shapes, images, and text.
// The object is CanvasRenderingContext2D is the canvas element itself, which can be used to access its properties and methods
* ctx holds all canvas methods and properties. 
*/
console.log(ctx);

```

- [x] Draw a responsive rectangle 

```javascript
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
```

- [x] Draw a Circle

```javascript
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
```

- [x] Interactive - Draw a circle each time click somewhere on the canvas

```javascript
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(canvas);

//set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(ctx); //Returns the 2D rendering context for the drawing surface of the canvas element.

//remove stretching of canvas objects
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});


/**
 * INTERACTIVE CANVAS
 * - Draw a rectangle everytime the mouse is clicked on the canvas
 */
const mouse = {
    // x and y coordinates of the mouse so that they're global all over the program
    x: undefined,
    y: undefined,
}
canvas.addEventListener('click', function (event) {
    // Everytime the mouse is clicked, the x and y coordinates of the mouse are updated
    mouse.x = event.x;
    console.log(event);
    console.log(mouse.x);
    mouse.y = event.y;

    //call the function
    drawCircle();
});

//Make a function to make reusable 
function drawCircle() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();

}
```

-[x] Draw a paint brush effect on canvas

```javascript
/**
 * INTERACTIVE CANVAS
 * - Draw a circle everytime the mouse is clicked on the canvas
 * - Mouse move event to track mouse position: code gets triggered each time a moves over the canvas 
 */
const mouse = {
    // x and y coordinates of the mouse so that they're global all over the program
    x: undefined,
    y: undefined,
}

//create a simple paint brush in canvas
canvas.addEventListener('mousemove', function (event) {
    //update the mouse coordinates on mouse move
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x, mouse.y);
    drawCircle();
});

//Make a function to make reusable 
function drawCircle() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}
```
