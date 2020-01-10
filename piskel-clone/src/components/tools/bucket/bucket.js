import { canvas, ctx } from "../../canvas.js";
import {tools} from '../tools.js';
import {size} from '../SizeTool/sizetools.js';
const CANVAS_SIZE = 768;
class Bucket{
    constructor(_color){
        this.color  = _color;
        this.mouse = {x:0, y:0};
    }
    MouseDown(e){
        if (tools.id == 'bucket'){   
        this.mouse.x = e.pageX - canvas.offsetLeft;
        this.mouse.y = e.pageY - canvas.offsetTop;
        ctx.fillStyle = this.color;
        floodFill.fill(this.mouse.x,this.mouse.y,10,ctx);
        }
    }
    
}
const bucket = new Bucket("#000")
export {bucket, Bucket};