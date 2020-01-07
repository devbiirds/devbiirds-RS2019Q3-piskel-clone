import {canvas_pallete} from '../canvas.js';
const frame = document.querySelector('.frame');
const CANVAS_SIZE = 768;
class Frame {
    constructor(){
        this.counter = 0;
        this.Currentframe = null;
        this.listFrame = [];
        this.btn = document.querySelector('.frame--add')
        this.btn.addEventListener('click',()=>{
            canvas_pallete.Load();
            this.Add(canvas_pallete.saveImage())
        });
    }
    Add(data){
          let frame_item = document.createElement('img');
          frame_item.src = data;
          frame_item.classList.add('frame__item');
          this.Currentframe = frame_item;
         frame.insertBefore(frame_item,frame.firstChild);
          this.listFrame.push(frame)
         this.counter++;
    }
    Delete(){

    }
    Move(){

    }
    ChangingFrame(data){
        this.Currentframe.src = data;
    }
}

const framebox = new Frame();
export {framebox, Frame};