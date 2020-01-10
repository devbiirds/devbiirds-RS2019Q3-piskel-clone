import './scss/main.scss';
import {tools, Tools} from './components/tools/tools.js';
import {canvas, canvas_pallete} from './components/canvas.js';
import {pencil} from './components/tools/pencil/pencil';
import {eraser} from './components/tools/eraser/eraser.js';
import {grid} from './components/piskel.js';
import {stroke} from './components/tools/stroke/stroke.js';
import {framebox} from './components/Frame/frame.js';
import {bucket} from './components/tools/bucket/bucket.js';
import {input_color, ChangeColor} from './components/tools/color/color.js';
input_color.addEventListener('click',ChangeColor)
grid.addEventListener('mousedown', (event)=>{
    switch (tools.id) {
        case "pencil":pencil.MouseDown(event);break;
        case "allbucket":break;
        case "eraser":eraser.MouseDown(event);break;
        case "stroke":stroke.MouseDown(event);break;
        case 'bucket':bucket.MouseDown(event);break;
        default:
            break;
    }

});
grid.addEventListener('mousemove',(event)=>{
  
   switch (tools.id) {
       case "pencil":pencil.Mousemove(event);break;
       case "eraser":eraser.Mousemove(event);break;
       default:
           break;
   }
    
});
grid.addEventListener('mouseup', (event)=>{
    switch (tools.id) {
        case "pencil": pencil.Mouseup(event);break;
        case "eraser":eraser.Mouseup(event);break;
        default:
            break;
    }
    framebox.ChangingDataFrame(canvas_pallete.saveImage());
});