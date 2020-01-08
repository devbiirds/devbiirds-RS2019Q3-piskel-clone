import {canvas_pallete} from './tools/canvas.js';
import {framebox} from './tools/Frame/frame.js';
import {animation} from './tools/Show/show.js';
const canvas = document.querySelector('.mainbox');
const firstpage = document.querySelector('.start-page');
const startbtn = document.querySelector('.start-btn');
const gobackbtn = document.querySelector('.TODO')//TO DO
const canvas_item = document.querySelector('.canvas');
const grid = document.createElement('div');

grid.classList.add('canvas_grid');
const CANVAS_SIZE = 768;
class MyPiskelClone{
    constructor(firstpage,canvas,startbtn,gobackbtn){
        this.firstpage = firstpage;
        this.canvas = canvas;
        this.startbtn = startbtn;
        this.gobackbtn = gobackbtn;
        this.startbtn.addEventListener('click',()=>{
            this.StartPiskel();
        })
        /* this.gobackbtn.addEventListener('click',()=>{
            this.GoLending();
        }) */
    
    }
    
    StartPiskel(){
        this.firstpage.style = "display:none";
        this.canvas.style = "display:block";
        canvas_pallete.Load();
        framebox.Add(canvas_pallete.saveImage());
        animation.FPS_SHOW(0); 
        canvas_item.appendChild(grid);
        for(let i = 0 ; i < CANVAS_SIZE; i+=32){
            let canvas_line = document.createElement('div');
            for(let j = 0 ; j < CANVAS_SIZE ; j+=32){
            let node = document.createElement('div');
            node.classList.add('canvas_squade');
            canvas_line.appendChild(node);
            canvas_line.classList.add('canvas_line');
        }
        grid.appendChild(canvas_line);
        }
    }
    GoLending(){
        this.firstpage.style = "display:block";
        this.canvas.srtle = "display:none";
    }

}
const mypiskel = new MyPiskelClone(firstpage,canvas,startbtn,gobackbtn);
export {mypiskel,MyPiskelClone,grid};