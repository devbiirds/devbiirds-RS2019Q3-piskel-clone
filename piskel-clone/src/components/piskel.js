const canvas = document.querySelector('.mainbox');
const firstpage = document.querySelector('.start-page');
const startbtn = document.querySelector('.start-btn');
const gobackbtn = document.querySelector('.TODO')//TO DO
class MyPiskelClone{
    constructor(firstpage,canvas,startbtn,gobackbtn){
        this.firstpage = firstpage;
        this.canvas = canvas;
        this.startbtn = startbtn;
        this.gobackbtn = gobackbtn;
        this.startbtn.addEventListener('click',()=>{
            this.StartPiskel();
        })
        /* this.gobackbtn.addEventListener('click',()=>{
            this.GoLending();
        }) */
    
    }
    
    StartPiskel(){
        this.firstpage.style = "display:none";
        this.canvas.style = "display:block";
    }
    GoLending(){
        this.firstpage.style = "display:block";
        this.canvas.srtle = "display:none";
    }

}
const mypiskel = new MyPiskelClone(firstpage,canvas,startbtn,gobackbtn);
export {mypiskel,MyPiskelClone};