class MyPiskelClone{
    constructor(firstpage,canvas,startbtn,gobackbtn){
        this.firstpage = firstpage;
        this.canvas = canvas;
        this.startbtn = startbtn;
        this.gobackbtn = gobackbtn;
        this.startbtn.addEventListener('click',()=>{
            StartPiskel();
        })
        this.gobackbtn.addEventListener('click',()=>{
            GoLending();
        })
    
    }
    
    static StartPiskel(){
        this.firstpage.style = "display:none";
        this.canvas.style = "display:block";
    }
    static GoLending(){
        this.firstpage.style = "display:block";
        this.canvas.srtle = "display:none";
    }

}