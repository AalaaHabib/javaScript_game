import Paddle from '/src/Paddle.js';//import class paddle
import InputHandler from '/src/InputHandler.js';
import Ball from '/src/ball.js'
let canvas = document.getElementById('gameScreen'),//canvaas container
ctx    = canvas.getContext('2d'); //context to draw in it   


const gameWidth  = canvas.clientWidth ,
      gameHeight = canvas.clientHeight ;
let paddle = new Paddle(gameWidth,gameHeight);// new object from paddle class
paddle.draw(ctx);    //draw paddle in the context area

 new InputHandler(paddle);
 let ball =new Ball(gameWidth,gameHeight);

let lastTime=0;
//this function to make the object moving 
function gameloop(timeStamp) {
    let deltaTime=timeStamp -lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0,0,gameWidth,gameHeight); // set the context deimension 
    paddle.update(deltaTime);
    paddle.draw(ctx);
    requestAnimationFrame(gameloop);
    //to know the last frame time
    ball.update(deltaTime);
    ball.draw(ctx);
    
}
requestAnimationFrame(gameloop);
