const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

console.log(ctx);

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});


/**
 * INTERACTIVE CANVAS
 * - Draw a circle everytime the mouse is clicked on the canvas
 * - Mouse move event to track mouse position: code gets triggered each time a moves over the canvas 
 * - Make an animation
 * - Draw randomized circles on the canvas that interact with mouse in different ways
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
    //drawCircle();
});

//create a simple paint brush in canvas
canvas.addEventListener('mousemove', function (event) {
    //update the mouse coordinates on mouse move
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x, mouse.y);
    //drawCircle();
});


/** * RANDOMIZED CIRCLES
*/

//Each particle will be one circle
// Each time we call the class, it will create one new object
class Particle {
    constructor() {

        // x and y postitons to be random on the canvas respectively
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;


        //particles to be different sizes
        this.size = Math.random() * 5 + 1; //random size between 1 and 6
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
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
        ctx.fill();
    }

}

//function that will call draw() run many times - LOOP
function init() {
    //100 randomised particles with random sizes and speed
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle()); //create one new object
    }
}

init();
console.log(particlesArray);

// * - cycle through the array and trigger the update() & draw() for each indvidual particle making them move around and draw them
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

    //call function
    handleParticles(); //random circles are formed all over the canvas

    //drawCircle();

    requestAnimationFrame(animate);
}
//call function to start t he animation
animate();