import {pencil} from '../pencil/pencil.js';
const DEFAULT_SIZE_DRAW = 32;
const active_small = document.querySelector('.size_active--small');
const active_medium = document.querySelector('.size_active--medium');
const active_large = document.querySelector('.size_active--large');
class Size{
    constructor(_default_size){
        this.item_size = _default_size;
        this.item_prev = active_small;
        this.items = document.querySelectorAll('.size_info');
        this.items.forEach((elem)=>{
            elem.addEventListener('click',(event)=>{
                if(event.currentTarget.id == 'small')  {
                    this.item_size = SMALL_SIZE;
                    active_small.style = "visibility: visible;";
                    this.item_prev.style = "visibility: hidden;";
                    this.item_prev = active_small;
                }
                if(event.currentTarget.id == 'medium') {
                    this.item_size = MEDUIM_SIZE;
                    active_medium.style = "visibility: visible;";
                    this.item_prev.style = "visibility: hidden;";
                    this.item_prev = active_medium;
                }
                if(event.currentTarget.id == 'large')  
                {
                    this.item_size = LARGE_SIZE;
                    active_large.style = "visibility: visible;";
                    this.item_prev.style = "visibility: hidden;";
                    this.item_prev = active_large;
                }
                
            })
        })
    }
    toSmall(){
        tools.size = SMALL_SIZE;
    }
    toMedium(){
        tools.size = MEDUIM_SIZE;
    }
    toLarge(){
        tools.size = LARGE_SIZE;
    }

}

const size = new Size(DEFAULT_SIZE_DRAW);
export {size,Size};


const SMALL_SIZE = 32;
const MEDUIM_SIZE = 64;
const LARGE_SIZE = 128;
