// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
// defining a class names ball
class Ball{
    //created a constructor
    constructor(x,y,velX,velY,size){
        this.x = x;
        this.y=y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStryle = this.color;
        ctx.arc(this.x ,this.y ,this.size ,0 ,2*Math.PI);
        ctx.fill();
    }
}
