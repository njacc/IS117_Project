//For collapsible sections in the document
let cButtons = document.getElementsByClassName("collapsible");
let i;
for(i=0;i<cButtons.length;i++){
    cButtons[i].addEventListener("click",function(){
        this.classList.toggle("active");
        console.log("Working");
        let c = this.nextElementSibling;
        if(c.style.maxHeight){
            c.style.maxHeight = null;
        }else{
            c.style.maxHeight = (c.scrollHeight + "px");
        }
    }
    );
}