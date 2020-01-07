
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
 
function saveImage() {
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 
    window.location.href=image; // it will save locally
}
export {canvas, ctx, saveImage};