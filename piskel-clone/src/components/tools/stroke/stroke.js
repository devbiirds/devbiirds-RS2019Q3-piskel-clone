import {Pencil} from '../pencil/pencil.js';
import {tools} from '../tools.js';
import {canvas} from "../../canvas.js";
import {size} from '../SizeTool/sizetools.js';
var flag = false;
class Stroke extends Pencil{
    constructor(color){
        super(color);
        this.startPixel = {x:0, y:0};
        this.nextPixel = {x:0, y:0,};
        this.state = false;
    }
    MouseDown(e){
        if(tools.id == 'stroke'){
            if(flag){
                this.startPixel = {x:0, y:0};
                this.nextPixel = {x:0, y:0,};
                flag = !flag;
            }
            if(!this.state){
                this.startPixel.x =  e.pageX - canvas.offsetLeft;
                this.startPixel.y = e.pageY - canvas.offsetTop;
                this.state = !this.state;
                }
            else{
                this.nextPixel.x = e.pageX - canvas.offsetLeft;
                this.nextPixel.y = e.pageY - canvas.offsetTop;
                this.state = !this.state;
                flag = !flag;

            }
            if(this.startPixel.x != 0 && this.nextPixel.x != 0){
                if(Math.abs(this.nextPixel.y - this.startPixel.y) <= size.item_size){
                    let width = this.nextPixel.x - this.startPixel.x;
                    if(width <= size.item_size * 2){
                        this.setPixel(this.startPixel.x,this.startPixel.y);
                        this.setPixel(this.nextPixel.x,this.nextPixel.y);
                    }
                    if(width <= 0){
                        for(let i = this.nextPixel.x; i <= this.startPixel.x; i++){
                            this.setPixel(i,this.nextPixel.y);
                        }
                    }
                    else{
                        for(let i = this.startPixel.x; i <= this.nextPixel.x; i++){
                            this.setPixel(i,this.startPixel.y);
                        }    
                    }
                }
                else{
                    if(Math.abs(this.nextPixel.x - this.startPixel.x) <= size.item_size){
                        let heigth = this.nextPixel.y - this.startPixel.y;
                        if(heigth <= 0){
                            for(let i = this.nextPixel.y; i <= this.startPixel.y; i++){
                                this.setPixel(this.nextPixel.x, i);
                            }
                        }
                        else{
                            for(let i = this.startPixel.y; i <= this.nextPixel.y; i++){
                                this.setPixel(this.startPixel.x, i);
                            }    
                        }
                        
                    }
                    this.startPixel = {x:0, y:0};
                    this.nextPixel = {x:0, y:0,};
                }
                
            }    
        }
               
        }
    
}
const stroke = new Stroke("#000");
export {stroke, Stroke};