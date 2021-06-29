
import { disablebtn } from "../disable&enablebtn";
import { Enablebtn } from "../disable&enablebtn";
import {time} from "../sortinganalizer"
const get = document.getElementsByClassName("arrayset");



const changecolor=(i,j,color1,color2)=>{
    get[i].style.backgroundColor=color1
    get[j].style.backgroundColor=color2
}

export const selectionsort = (array) => {
    let k=0;
  
    disablebtn();

    for (let i = 0; i < array.length - 1; i++) {

        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            
            if (array[j] < array[min]) {
                min = j;
            }
        }
        setTimeout(changecolor,time*k-time/2,i,min,"red","yellow")
       
        setTimeout(() => {
            get[i].style.backgroundColor="cyan"
                const temp=get[i].style.cssText;
                get[i].style.cssText=get[min].style.cssText;
                get[min].style.cssText=temp; 
                
                if(i+1==array.length-1){
                    for(let j=0;j<i+2;j++){
                        setTimeout(() => {
                            get[j].style.backgroundColor="#66ff33"   
                            Enablebtn();
                        },20*j );
                    }
                }
                
            
          
           
        }, time*k);
        setTimeout(changecolor,time*k+10,i,min,"cyan","cyan")
        
        k++;
        [array[min], array[i]] = [array[i], array[min]];


    }
    return array
  ;

}






