export default class Paddle{
    constructor(game_width,game_height){
        this.width   = 150;
        this.height  = 20;
        this.game_width=game_width;
        this.maxSpeed = 7;
        this.speed = 0;
        this.postion ={
            x :game_width/2 - this.width/2 ,
            y :game_height - this.height -10 
        };
    }
    moveLeft(){
        this.speed = -this.maxSpeed;//عكس الاتجاه فا هتمشي شمال
    }
    moveRight(){
        this.speed= this.maxSpeed; //مع الاتجاه فهتمشي يمين 
    }
    stop(){
        this.speed=0;
    }
    draw(ctx){
        ctx.fillStyle="#09c";
        ctx.fillRect(this.postion.x,this.postion.y,this.width,this.height);
    }
    update(deltaTime){
        //this.postion.x+=5/deltaTime;
        this.postion.x+=this.speed; 
        if(this.postion.x<0) this.postion.x=0; //عشان لو كانت هتخرج من الشاشه من ناحيه الشمال يعني وافقه علي ال0 بكيسل
        if(this.postion.x+this.width>this.game_width)
            this.postion.x=this.game_width-this.width;
    }
}
