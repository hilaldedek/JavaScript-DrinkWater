const glassDiv=document.querySelector(".glassDiv");
const smallGlass=document.querySelectorAll(".glass");
// console.log(document.querySelector(".glassDiv").children[2].children[0]);
const falseArray=[0,1,2,3,4,5,6,7];
const trueArray=[];
smallGlass.forEach((k,id)=>{
    k.addEventListener("click",()=>drinkWater(id))
});
function drinkWater(id){
    glassDiv.addEventListener("click",(event)=>{
    if(event.target.classList.contains("glass")){
        console.log("id",id);
        console.log("indexof",falseArray.indexOf(id));
        if(falseArray.indexOf(id)>-1){
            console.log("HİÇ YOKTUM BOYADIM");
        const glass=event.target.setAttribute("style","background-color:#337CCF;width:4rem; height:5rem; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; box-shadow: rgba(0, 0, 0, 0.553) 1.95px 1.95px 2.6px; color:white;  border: none; font-family: 'ADLaM Display';font-size: 1rem;");
        if(trueArray.length==0){
            trueArray.push(id);
            delete falseArray[id];
            console.log("FALSE ARRAY",falseArray);

        }
        else if(trueArray.indexOf(id)==-1){
            trueArray.push(id);
            delete falseArray[id];
            console.log("FALSE ARRAY",falseArray);

        }
        }
        else if(trueArray.indexOf(id)>-1){
            console.log("BOYALIYDIM ESKİYE DÖNDÜM");
        const glass=event.target.setAttribute("style","background-color:#d5f4ee6c;width:4rem; height:5rem; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; box-shadow: rgba(0, 0, 0, 0.553) 1.95px 1.95px 2.6px; color:black;  border: none; font-family: 'ADLaM Display';font-size: 1rem;");
        const filteredArray = falseArray.filter(function (element) {
            return element !== undefined;
            });
        if(filteredArray.length==0){
            falseArray.push(id);
            delete trueArray[id];
            console.log("FALSE ARRAY",falseArray);

        }
        else if(filteredArray.indexOf(id)==-1){
            falseArray.push(id);
            delete trueArray[id];
            console.log("FALSE ARRAY",falseArray);

        }
        }
        
        
        // if(trueArray.length==0){
        //     trueArray.push(id);
        //     delete falseArray[id];
        //     console.log("FALSE ARRAY",falseArray);

        // }
        // else if(trueArray.indexOf(id)==-1){
        //     trueArray.push(id);
        //     delete falseArray[id];
        //     console.log("FALSE ARRAY",falseArray);

        // }
        // if(falseArray.length==0){
        //     falseArray.push(id);
        //     delete trueArray[id];
        //     console.log("FALSE ARRAY",falseArray);

        // }
        // else if(falseArray.indexOf(id)==-1){
        //     falseArray.push(id);
        //     delete trueArray[id];
        //     console.log("FALSE ARRAY",falseArray);

        // }
        console.log("TRUE ARRAY",trueArray.sort());
    }
    // console.log("girmiyom ki");
})
}

