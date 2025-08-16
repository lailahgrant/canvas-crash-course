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

- [x] Interactive Animation

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
 * - Draw a circle everytime the mouse is clicked on the canvas
 * - Mouse move event to track mouse position: code gets triggered each time a moves over the canvas 
 */
const mouse = {
    // x and y coordinates of the mouse so that they're global all over the program
    x: undefined,
    y: undefined,
}

//Make a function to make reusable 
function drawCircle() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}


// interactive animation
function animate() {
    //clear old paint from the canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle();
    //use a built-in function to calls function once and pass it as an argument
    //requestAnimationFrame(animate); - runs animation in a loop
    requestAnimationFrame(animate);
}
//call function to start the animation
animate();
```


- [x] Interactive shape on the Mouse cursor

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
 * - Make an animation
 */
const mouse = {
    // x and y coordinates of the mouse so that they're global all over the program
    x: undefined,
    y: undefined,
}

//Make a function to make reusable 
function drawCircle() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}


// interactive animation
function animate() {
    //clear old paint from the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle();
    //use a built-in function to calls function once and pass it as an argument
    //requestAnimationFrame(animate); - runs animation in a loop
    requestAnimationFrame(animate);
}
//call function to start the animation
animate();
```

- [x] RANDOMIZED CIRCLES
 * Randomized circles that interact with mouse differently
 * Create a set of js objects
 * Each object will have it's own `x` and `y` coordinates and own size properties
  
 * To create many similar `objects`, use **`Classes`**
 * **Classes** are blueprints for creating objects with similar properties and methods
 
 * **Class** is the blueprint where we define the properties and behaviours of the objects.
 * *Properties* of the object are defined in the mandatory `constructor` method that each class needs to have.
 * *Behaviour* of these objects is defined in `methods` that we can add to the class. 
 * Methods are functions in an object.

- Each particle will be one circle
// Each time we call the class, it will create one new object

```javascript
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(canvas);

//set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Global particles array (data structure to hold particle objects created by Particle class)
const particlesArray = [];

/** * RANDOMIZED CIRCLES
 * - Randomized circles that interact with mouse differently
 * - Create a set of js objects
 * - Each object will have it's own x and y coordinates and own size properties
 * 
 * - To create many similar objects, use Classes
 * - Classes are blueprints for creating objects with similar properties and methods
 *
 * - Class is the blueprint where we define the properties and behaviours of the objects.
 * - Properties of the object are defined in the mandatory constructor method that each class needs to have.
 * - Behaviour of these objects is defined in methods that we can add to the class. 
 * - Methods are functions in an object
*/

//Each particle will be one circle
// Each time we call the class, it will create one new object
class Particle {
    constructor() {
        //particles to appear on the mouse and start flowing from there in random directions

        /* * Set the x and y coordinates to the position of the cursor:-
        * - on page load - x and y are undefined as there's no mouse activity on canvas
        // this.x = mouse.x;
        // this.y = mouse.y;
        */

        //set x and y to be a random number on the canvas on width and height respectively
        this.x = Math.random() * canvas.width; // x is between 0 and canvas width
        this.y = Math.random() * canvas.height; // y is between 0 and canvas height

        //particles to be different sizes
        this.size = Math.random() * 5 + 1; //random size between 1 and 6
        //particles at sliglty different speeds (move in all direction from the mouse)
        //speedX - horizontal speed
        //speedY - vertical speed
        //these speeds added together will create a a vector movement (direction and speed)
        this.speedX = Math.random() * 3 - 1.5; //random speed between -1.5 and 1.5
        this.speedY = Math.random() * 3 - 1.5; //random speed between -1.5 and 1.5
    }

    //Behaviour: method to draw the particle

    //HOW TO CREATE a simple 2D ANIMATION ON CANVAS
    update() {
        this.x += this.speedX; // positive move to the right, negative move to the left along x-axis
        this.y += this.speedY; // positive move down, negative move up along y-axis
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        //all the particles are the same size - 50 (hard coded value)
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
        ctx.fill();
    }

}

//function that will call draw() run many times - LOOP
function init() {
    //100 randomised particles with random sizes and speed
    for (let i = 0; i < 100; i++) {

        //creating 100 particle object and placing them in the particleArray
        particlesArray.push(new Particle()); //create one new object
        //cycle through the array and trigger the update() & draw() for each indvidual particle
    }
}

init();
console.log(particlesArray);

/**
 * - Create a function
 * - cycle through the array and trigger the update() & draw() for each indvidual particle making them move around and draw them
 * - Create another for loop that will cycle through all Particle object inside particle array
 * - Each individual particle was created with a constructor: meaning they have access to update()  & draw()
 */
function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        //cycle through the methods
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

// interactive animation
function animate() {
    //clear old paint from the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //drawCircle();

    //use a built-in function to calls function once and pass it as an argument
    //requestAnimationFrame(animate); - runs animation in a loop
    requestAnimationFrame(animate);
}
//call function to start the animation
animate();
```

