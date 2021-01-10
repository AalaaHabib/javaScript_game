export default class Ball{
    constructor(gameWidth,gameHeight) {
        this.gameWidth=gameWidth;
        this.gameHeight=gameHeight;
        this.img=document.getElementById('ball');
        this.position={x:10,y:10};
        this.speed={x:2,y:2}
        this.size=16;
    
    }
    draw(ctx){
        ctx.drawImage(this.img,
            this.position.x,
            this.position.y,
            this.size,
            this.size)
    }
    update(deltaTime){
        this.position.x+=this.speed.x;
        this.position.y+=this.speed.y;
        if(this.position.x>this.gameWidth||this.position.x<0){
            this.speed.x=-this.speed.x;
        }
        if(this.position.y>this.gameHeight||this.position.y<0){
            this.speed.y=-this.speed.y;
        }
    }
}