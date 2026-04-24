//DEVELOPER: Peter Ly, IS117-002, Spring 2026
//For collapsible sections in the document (major sections, not related to viewport options)
let cButtons = document.getElementsByClassName("collapsible");
for(let i=0;i<cButtons.length;i++){
    cButtons[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let c = this.nextElementSibling;
        if(c.style.maxHeight){
            c.style.maxHeight = null;
        }else{
            c.style.maxHeight = (c.scrollHeight + "px");
        }
    }
    );
}