class Tools{
    constructor(_tools,size){
        this.prev_tool = null;
        this.tool = null;
        this.id = null;
        this.tools = _tools;
        this.tools.forEach((item)=>{
            item.addEventListener('click',(event)=>{
                if(this.tool === null) this.prev_tool = event.currentTarget;
                this.tool = event.currentTarget;
                this.id = this.tool.id;
                Tools.ChangeTool(this.tool,this.prev_tool,this.tool.id);//checked
                this.prev_tool = event.currentTarget;
            })
        })
    }
    static ChangeTool(tool,prev_tool,id){
        if(prev_tool !== null) prev_tool.classList.toggle('tools_icon--active',false);
        tool.classList.add('tools_icon--active');
    }
    
}
const tools = new Tools(document.querySelectorAll('.tools__item--element'));
export {tools,Tools};