import {framebox} from '../Frame/frame.js';
const fps_range = document.querySelector('.fps');
const fps_image = document.querySelector('.canvas__tools--show-canvas');
let image = document.createElement('img');
image.classList.add('fps-image')
class Show {
    constructor(){
        this.interval = null;
    }
    NextFrame(image, counter){
        console.log("counter In NextFrame"+counter);
        image.src = framebox.listFrame[counter].src;
    }
    FPS_SHOW(counter){
        clearInterval(this.interval);
        console.log("counter = "+counter);
        fps_image.appendChild(image);
        let i = 0;
        this.interval = setInterval(()=> {
        console.log("i = " + i);
        if(i == counter ) i = 0;
        else { this.NextFrame(image, i);i++;} 
    }, 3520); 
        
    }
}

const animation = new Show();
export {animation, Show};