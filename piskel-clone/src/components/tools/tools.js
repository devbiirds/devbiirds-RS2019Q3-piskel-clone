import cleaning from './clean/clean.js';
var keydown = [];
var flag = true;
class Tools{
    constructor(_tools){
        this.prev_tool = null;
        this.tool = null;
        this.id = null;
        this.tools = _tools;
        this.tools.forEach((item)=>{
            item.addEventListener('click',(event)=>{
                this.Action(event);
            })
        })
        document.addEventListener('keydown', (e)=>this.logKey(e));
    }
    logKey(e) {
        if (event.code == 'KeyP' && event.shiftKey) {
            this.Action(event);
            this.ChangeTool("pencil",this.prev_tool);
          }
      }
    Action(event){
        if(this.tool === null) this.prev_tool = event.currentTarget;
        this.tool = event.currentTarget;
        this.id = this.tool.id;
        if(this.id == "cleaning") cleaning.Clean();
        this.ChangeTool(this.tool,this.prev_tool);//checked
        this.prev_tool = event.currentTarget;
    }
    ChangeTool(tool,prev_tool){
        if(prev_tool !== null) prev_tool.classList.toggle('tools_icon--active',false);
        tool.classList.add('tools_icon--active');
    }
    
    
}
const tools = new Tools(document.querySelectorAll('.tools__item--element'));
export {tools,Tools};