

// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
//creatring a shape class
class shape {
  constructor(x, y, velX, velY){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

class Ball extends shape {
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);
    this.color = color;
    this.size = size;
    this.exists = true;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
 
  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
class EvilCircle extends shape {
    constructor(x, y){
      super(x, y, 0, 0);
      this.color = 'white';
      this.size = 10;
      this.speed = 5;
    }


 draw() {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}

      checkBounds() {
        if (this.x + this.size >= width) {
          this.velX = -this.velX;
        }
        if (this.x - this.size <= 0){
          this.velX = -this.velX;
        }
        if (this.y + this.size >= height){
          this.velY = -this.velY;
        }
        if (this.y - this.size <= 0) {
          this.velY = -this.velY;
        }
    
        this.x += this.velX;
        this.y += this.velY;
      }
      keyboardControl(e) {
        switch (e.key) {
          case "a":
            this.velX = -this.speed; // Move left
            this.velY = 0;
            break;
          case "d":
            this.velX = this.speed; // Move right
            this.velY = 0;
            break;
          case "w":
            this.velY = -this.speed; // Move up
            this.velX = 0;
            break;
          case "s":
            this.velY = this.speed; // Move down
            this.velX = 0;
            break;
        }
      }
    

collisionDetect() {
  for (const ball of balls) {
    if (ball.exists) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ball.size) {
        ball.exists = false;
        changeBallCount();

      }
    }
  }
}
}

const balls = [];
const evilCircle = new EvilCircle(random(0, width), 
random(0, height));


while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
 

}
function changeBallCount() {
    
        const remainingBalls = balls.filter(ball => ball.exists).length;
        const ballCountElement = document.getElementById("ballCount");
        if (ballCountElement) {
          ballCountElement.textContent = remainingBalls;
        } else {
          console.error("Element with id 'ballCount' not found.");
        }
      

}

window.addEventListener("keydown", (e) => {
  evilCircle.keyboardControl(e);
});


function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    if(ball.exists){
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }
}
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();


  requestAnimationFrame(loop);
}

loop();

