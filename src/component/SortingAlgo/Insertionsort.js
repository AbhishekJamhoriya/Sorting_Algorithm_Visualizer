
import {time} from "../sortinganalizer"
import { disablebtn } from "../disable&enablebtn";
import { Enablebtn } from "../disable&enablebtn";

const get = document.getElementsByClassName("arrayset");



function bgchange(prev){
    get[prev+1].style.backgroundColor="#ff0000"
    get[prev].style.backgroundColor="#cc00cc"
};
function bg1change(prev){
    get[prev+1].style.backgroundColor="#66ff33"
    get[prev].style.backgroundColor="#66ff33"
};

function bgchange1(prev){
    get[prev+1].style.backgroundColor="#66ff33"
   
};

function change(prev){
    get[prev+1].style.cssText=get[prev].style.cssText;
};
function change1(prev,value){
    get[prev+1].style.cssText=value;
}

export const InsertionSort=(array)=>{
    disablebtn();
    let k=0;
    

    for(let i=1;i<array.length;i++){

        let curr=array[i];
        let value=get[i].style.cssText;

        let prev=i-1;
        while(curr<array[prev] && prev>=0){
            setTimeout(bgchange,k-time/4,prev);
            setTimeout(bg1change,k-time/6,prev);
            setTimeout(change,k,prev);
            k=k+time/2;
            
        
            array[prev+1]=array[prev];
            prev--;
           
        }
    
            console.log(prev);
           
            setTimeout(change1,k,prev,value);
            setTimeout(bgchange1,k,prev,value);
           
            
     
       
        array[prev+1]=curr;
    }
    setTimeout(() => {
        Enablebtn();
    }, k);
    return array;


}