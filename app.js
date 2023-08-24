const glassDiv=document.querySelector(".glassDiv");
const smallGlass=document.querySelectorAll(".glass");
// console.log(document.querySelector(".glassDiv").children[2].children[0]);
const falseArray=[0,1,2,3,4,5,6,7];
const trueArray=[];
var ctr=0;
smallGlass.forEach((k,id)=>{
    k.addEventListener("click",()=>{
        ctr++;
        console.log("COUNTER",ctr);
        drinkWater(id)})
});
        
function drinkWater(id){
    glassDiv.addEventListener("click",(event)=>{
        const filteredFalseArray = falseArray.filter(function (element) {
            return element !== undefined;
            });
            // console.log("filtered false array",filteredFalseArray);
         const filteredTrueArray = trueArray.filter(function (element) {
            return element !== undefined;
            });
        if(event.target.classList.contains("glass")){
            console.log("id",id);
            if(filteredFalseArray.indexOf(id)>-1){
                console.log("HİÇ YOKTUM BOYADIM");
                const glass=event.target.setAttribute("style","background-color:#337CCF;width:4rem; height:5rem; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; box-shadow: rgba(0, 0, 0, 0.553) 1.95px 1.95px 2.6px; color:white;  border: none; font-family: 'ADLaM Display';font-size: 1rem;");
                    if(filteredTrueArray.length==0){
                        console.log("+++++++++++");
                        filteredTrueArray.push(id);
                        trueArray.push(id);
                        console.log("FİLTERED TRUE ARRAY",filteredTrueArray);
                        console.log("TRUE ARRAY",trueArray);
                        delete filteredFalseArray[filteredFalseArray.indexOf(id)];
                        delete falseArray[falseArray.indexOf(id)];
                        console.log("FİLTERED FALSE ARRAY",filteredFalseArray);
                        console.log("FALSE ARRAY",falseArray);
                        console.log("+++++++++++");

                    }
                    else if(filteredTrueArray.indexOf(id)==-1){
                        console.log("------------");
                        filteredTrueArray.push(id);
                        trueArray.push(id);
                        console.log("FİLTERED TRUE ARRAY",filteredTrueArray);
                        console.log("TRUE ARRAY",trueArray);
                        delete filteredFalseArray[filteredFalseArray.indexOf(id)];
                        delete falseArray[falseArray.indexOf(id)];
                        console.log("FİLTERED FALSE ARRAY",filteredFalseArray);
                        console.log("FALSE ARRAY",falseArray);
                        console.log("------------");

                    }
            }
            else if(filteredTrueArray.indexOf(id)>-1){
                if(filteredFalseArray.indexOf(id)==-1){
                    const glass=event.target.setAttribute("style","background-color:#d5f4ee6c;width:4rem; height:5rem; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; box-shadow: rgba(0, 0, 0, 0.553) 1.95px 1.95px 2.6px; color:black;  border: none; font-family: 'ADLaM Display';font-size: 1rem;");
                    console.log(".................");
                    console.log("BOYALIYDIM ESKİYE DÖNDÜM");
                    filteredFalseArray.push(id);
                    falseArray.push(id);
                    console.log("FİLTERED FALSE ARRAY",filteredFalseArray);
                    console.log("FALSE ARRAY",falseArray);
                    delete filteredTrueArray[filteredTrueArray.indexOf(id)];
                    delete trueArray[trueArray.indexOf(id)];
                    console.log("FİLTERED TRUE ARRAY",filteredTrueArray);
                    console.log("TRUE ARRAY",trueArray);
                    
                    console.log(".................");
                }
            }
            else{
                console.log("BEN NEDEN BURDAYIM");
            }

    }

})
}

