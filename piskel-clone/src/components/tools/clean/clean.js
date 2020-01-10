import {canvas_pallete,ctx} from './../../canvas.js';
import {framebox} from '../../Frame/frame.js';
const CLEAN_COLOR = "#FFF";
class Clean{
    constructor(){

    }
    Clean(){
        ctx.fillStyle = CLEAN_COLOR;
        ctx.fillRect(0,0,768,768);
        framebox.ChangingDataFrame(canvas_pallete.saveImage());
    }
}
const cleaning = new Clean();
export default cleaning;