import {canvas_pallete,ctx} from '../canvas.js';
import {animation, Show} from '../Show/show.js';
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
          let frame_item = document.createElement('div')
          frame_item.classList.add('frame__item')
          let frame_image = document.createElement('img');
          let delete_icon = document.createElement('img');
          delete_icon.classList.add('delete-elem');
          frame_image.src = data;
          frame_image.classList.add('frame__image');
          frame_item.appendChild(frame_image);
          frame_item.appendChild(delete_icon);
          this.Currentframe = frame_image;
         frame.insertBefore(frame_item,frame.firstChild);
          this.listFrame.push(frame_image)
            frame_item.addEventListener('click', ()=>{
                this.listFrame.forEach(item =>{
                    item.classList.toggle('active-frame',false);
                })
                frame_item.classList.add('active-frame');
                this.ChangeFrame(frame_item,frame_image);
              })
        animation.FPS_SHOW(this.counter); 
         this.counter++;
         
    }
    Delete(){

    }
    Move(){

    }
    ChangeFrame(item, imgData){
        this.Currentframe = imgData;
        let img = new Image();
        img.src = imgData.src;
        
        ctx.drawImage(img,0,0);
        
    }
    ChangingDataFrame(data){
        
        this.Currentframe.src = data;
    }
}

const framebox = new Frame();
export {framebox, Frame};