
import {time} from "../sortinganalizer"
import { disablebtn } from "../disable&enablebtn";
import { Enablebtn } from "../disable&enablebtn";

const get = document.getElementsByClassName("arrayset");





export const Bubblesort=(array)=>{
    let k=0;
    disablebtn();
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
           
         
            setTimeout(() => {
                get[j].style.backgroundColor="red"
                get[j+1].style.backgroundColor="yellow"
                console.log(k);
            }, (time/2)*k);
          
            if(array[j]>=array[j+1]){
                setTimeout(() => {
                    const temp=get[j].style.cssText;
                    get[j].style.cssText=get[j+1].style.cssText;
                    get[j+1].style.cssText=temp;
                    console.log(k);
                }, (time/2)*k+time/5);
                [array[j],array[j+1]]=[array[j+1],array[j]];
                
            }
            setTimeout(() => {
                get[j].style.backgroundColor="cyan"
                get[j+1].style.backgroundColor="cyan"
                console.log(k);
                
      


            }, (time/2)*k+time/4);
            
            k++;
        }
        setTimeout(() => {
            get[array.length-i-1].style.backgroundColor="#66ff33"
        }, (time/2)*k);
        
    }
    setTimeout(() => {
        Enablebtn();
    }, (time/2)*k);
 
    return array;


}