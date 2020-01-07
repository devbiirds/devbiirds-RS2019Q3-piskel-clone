import {pencil,Pencil} from '../pencil/pencil.js';
import {tools} from '../tools.js';
import {canvas} from "../canvas.js";
class Stroke extends Pencil{
    constructor(color){
        super(color);
        this.startPixel = {x:0, y:0};
        this.nextPixel = {x:0, y:0,};
        this.state = false;
    }
    Stroke(x,y){
    
    }
    MouseDown(e){
        console.log('stroke work');
        if(tools.id == 'stroke'){

            if(!this.state){
                this.startPixel.x =  e.pageX - canvas.offsetLeft;
                this.startPixel.y = e.pageY - canvas.offsetTop;
                this.state = !this.state;
                }
            else{
                this.nextPixel.x = e.pageX - canvas.offsetLeft;
                this.nextPixel.y = e.pageY - canvas.offsetTop;
            }
            console.log(this.startPixel.x + " start " + this.startPixel.y);
            console.log(this.nextPixel.x + " next "+ this.nextPixel.y);
            if(this.startPixel.x != 0 && this.nextPixel.x != 0){
                
            }    
        }
               
        }
    
}
const stroke = new Stroke("#000");
export {stroke, Stroke};