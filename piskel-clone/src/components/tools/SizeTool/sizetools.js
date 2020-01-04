import {pencil} from '../pencil/pencil.js';
class Size{
    constructor(_small_size, _medium_size, _large_size){
        this.small_size = _small_size;
        this.medium_size = _medium_size;
        this.large_size = _large_size;
        this.small_size.addEventListener('click',)
    }
    toSmall(item){
        item.size = SMALL_SIZE;
    }
    toMedium(item){
        item.size = MEDUIM_SIZE;
    }
    toLarge(item){
        item.size = LARGE_SIZE;
    }

}




const SMALL_SIZE = 32;
const MEDUIM_SIZE = 64;
const LARGE_SIZE = 128;