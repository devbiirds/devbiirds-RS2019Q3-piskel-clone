import {framebox} from '../Frame/frame.js';
const fps_range = document.querySelector('.fps');
const fps_image = document.querySelector('.canvas__tools--show-canvas');
let image = document.createElement('img');
image.classList.add('fps-image')
class Show {
    constructor(fps_range){
        this.interval = null;
        this.range = fps_range;
        this.fps = 0;
        this.range.addEventListener('change',(event)=>{
            this.fps = this.range.value
            console.log("framebox = "+framebox.counter)
            animation.FPS_SHOW(framebox.counter - 1);
        })
    }
    NextFrame(image, counter){
        console.log('counter = ' + counter) 
        if(counter !== undefined)
        image.src = framebox.listFrame[counter].src;
    }
    FPS_SHOW(counter){
        clearInterval(this.interval);
        fps_image.appendChild(image);
        let i = 0;
        this.interval = setInterval(()=> {
        if(counter == 0) i = 0;
        if(i >= counter + 1  ) i = 0;
        else { this.NextFrame(image, i);i++;} 
    }, 1000/this.fps); 
        
    }
}

const animation = new Show(fps_range);
export {animation, Show};