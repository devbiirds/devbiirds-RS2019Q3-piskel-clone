import './scss/main.scss';
import Tools from './components/tools/tools.js';
import {canvas , ctx} from './components/tools/canvas.js';
import {pencil} from './components/tools/pencil/pencil';
const tools = new Tools(document.querySelectorAll('.tools__item--element'));
canvas.addEventListener('mousedown', (event)=>{
    pencil.MouseDown(event);
});
canvas.addEventListener('mousemove',(event)=>{
    pencil.Mousemove(event);
});
canvas.addEventListener('mouseup', (event)=>{
    pencil.Mouseup(event);
});

const size32x32 = document.querySelector('.size_small');
const size64x64 = document.querySelector('.size_medium');
const size128x128 = document.querySelector('.size_large');
