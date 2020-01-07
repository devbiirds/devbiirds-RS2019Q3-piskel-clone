import './scss/main.scss';
import {tools} from './components/tools/tools.js';
import {canvas , ctx} from './components/tools/canvas.js';
import {pencil} from './components/tools/pencil/pencil';
import {bucket} from './components/tools/bucket/bucket.js';
import {eraser} from './components/tools/eraser/eraser.js';
import {mypiskel} from './components/piskel.js';
import {stroke} from './components/tools/stroke/stroke.js';
canvas.addEventListener('mousedown', (event)=>{
    switch (tools.id) {
        case "pencil":pencil.MouseDown(event);break;
        case "allbucket":break;
        case "eraser":eraser.MouseDown(event);break;
        case "stroke":console.log(stroke);stroke.MouseDown(event);break;
        default:
            break;
    }
});
canvas.addEventListener('mousemove',(event)=>{
   switch (tools.id) {
       case "pencil":pencil.Mousemove(event);break;
       case "eraser":eraser.Mousemove(event);break;
       default:
           break;
   }
    
});
canvas.addEventListener('mouseup', (event)=>{
    switch (tools.id) {
        case "pencil": pencil.Mouseup(event);;break;
        case "eraser":eraser.Mouseup(event);break;
        default:
            break;
    }
});
/* canvas.addEventListener('mousedown', (event)=>{
    bucket.MouseDown(event);
}); */
