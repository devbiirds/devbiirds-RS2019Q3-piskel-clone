import {pencil} from '../pencil/pencil.js';
import {stroke} from '../stroke/stroke.js';
import {bucket} from '../bucket/bucket.js';
const input_color = document.getElementById("input_color");

function ChangeColor() {
    
    input_color.click();
    input_color.addEventListener("change", function() {
      pencil.color = input_color.value;
      stroke.color = input_color.value;
      bucket.color = input_color.value;
    });
  }
export {input_color, ChangeColor};