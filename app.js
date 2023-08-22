const glassDiv=document.querySelector(".glassDiv");
console.log(document.querySelector(".glassDiv").children[2].children[0]);
glassDiv.addEventListener("click",(event)=>{
    if(event.target.classList.contains("glass")){
        console.log("girdim");
        const glass=event.target.setAttribute("style","background-color:#337CCF;width:4rem; height:5rem; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; box-shadow: rgba(0, 0, 0, 0.553) 1.95px 1.95px 2.6px; color:white;  border: none; font-family: 'ADLaM Display';font-size: 1rem;");
    }
    console.log("girmiyom ki");
})
