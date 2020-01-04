export default class Tools{
    constructor(_tools){
        this.tools = _tools;
        this.tools.forEach((item)=>{
            item.addEventListener('click',(event)=>{
                console.log(event.target);
            })
        })
    }
    ChangeTool(){

    }
    
}