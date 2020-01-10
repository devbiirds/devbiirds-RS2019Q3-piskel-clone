import {canvas_pallete,ctx} from '../canvas.js';
import {animation, Show} from '../Show/show.js';
const frame = document.querySelector('.frame');
const CANVAS_SIZE = 768;
const icon_delete = '/src/assets/img/delete.svg';
const icon_copy = '/src/assets/img/clone-regular.svg';
class Frame {
    constructor(){
        this.counter = 0;
        this.Currentframe =  null;
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
          frame_image.src = data;
          frame_image.classList.add('frame__image');
          frame_item.appendChild(frame_image);
          frame_item.appendChild(this.AddDeleteBtn(icon_delete));
          frame_item.appendChild(this.AddCloneBtn(icon_copy));
          this.Currentframe = frame_image;
          frame.insertBefore(frame_item,frame.firstChild);
          this.listFrame.push(frame_image)
            frame_item.addEventListener('click', ()=>{
                this.ChangeFrame(frame_image);
              })
        animation.FPS_SHOW(this.counter);
         this.counter++; 
         this.Currentframe.counter = this.counter;
    }
    AddCloneBtn(data){
        let copy_icon = document.createElement('img');
        copy_icon.addEventListener('click',()=>{this.Clone()})
        copy_icon.classList.add('copy-elem');
        copy_icon.src = data;
        return copy_icon;
    }
    AddDeleteBtn(data){
        let delete_icon = document.createElement('img');
        delete_icon.classList.add('delete-elem');
        delete_icon.addEventListener('click', ()=>{
            this.Delete();
        })
        delete_icon.src = data;
        return delete_icon;
    }
    Clone(){
        this.Add(this.Currentframe.src)
    }
    Delete(){
        if(this.counter != 1){
    let counter = 0;
      let parent = document.querySelector('.frame');
      let current_frame;
      parent.removeChild(this.Currentframe.parentNode);
      this.listFrame.forEach((item)=>{
          if(item.src === this.Currentframe.src)
          {
             this.listFrame.splice(counter,1);
             current_frame = counter
          }
          counter++;
      })
      this.counter--;
      animation.FPS_SHOW(this.counter);

      if(current_frame == 1 || current_frame == 0){
          console.log("currentframe int " + current_frame)
        this.ChangingDataFrame(this.listFrame[0]);
        this.ChangeFrame(this.listFrame[0])
      }
      else{
        this.ChangingDataFrame(this.listFrame[current_frame-1]);
        this.ChangeFrame(this.listFrame[current_frame-1])
      }
    }
    else{
        alert('Невозможно удалить последний элемент');
    }
    }
    Move(){
     // TO DO
    }
    ChangeFrame(imgData){
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