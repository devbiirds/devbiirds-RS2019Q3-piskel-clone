
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_SIZE = 768;

class Canvas{
constructor(canvas,ctx){
    this.canvas  = canvas;
    this.ctx = ctx;
}
saveImage() {
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 
  return image;
}
Load(){
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
}
}
const canvas_pallete = new Canvas(canvas, ctx);
export {canvas, ctx, canvas_pallete}; 