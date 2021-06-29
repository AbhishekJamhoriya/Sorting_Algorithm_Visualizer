import { purple } from "color-name";
import { time } from "../sortinganalizer"
import { disablebtn } from "../disable&enablebtn";
import { Enablebtn } from "../disable&enablebtn";
const get = document.getElementsByClassName("arrayset");




let Time; 



const change = (i, k) => {
    [get[i].style.cssText, get[k].style.cssText] = [get[k].style.cssText, get[i].style.cssText];
}


const bgchange=(k,high,color1,color2)=>{
    get[high].style.backgroundColor=color1;
    get[k].style.backgroundColor=color2;
}

const partition = (array, low, high) => {
 

    var pivot = array[high];
    setTimeout(bgchange,Time-time/7,high,high,"#ff0000","#ff0000")
    var k = low - 1;
    for (var i = low; i < high; i++) {
       
        setTimeout(bgchange,Time-time/7,i,i,"yellow","yellow")
        if (array[i] <= pivot) {
            k++;
            [array[i], array[k]] = [array[k], array[i]];
            setTimeout(bgchange,Time-time/7,i,k,"yellow","cyan")
            setTimeout(change, Time-time/7, i, k);
            
           
            
         }
        
         Time+=time/2;
        //  setTimeout(bgchange,Time -time/7,i,i,"cyan","cyan")
    }
    
    setTimeout(() => {
        
        for(var r=k+1;r<=high;r++){
            get[r].style.backgroundColor="cyan";
        }

    },Time +10);
    [array[k + 1], array[high]] = [array[high], array[k + 1]];
    setTimeout(change, Time-time/7, k+1, high);
   
        setTimeout(bgchange,Time-time/7,k+1,high,"yellow","yellow");
    
   
      

    return k + 1;


}

const solve = (array, low, high) => {
    if (high > low) {
        var pivot = partition(array, low, high);
       
        solve(array, low, pivot - 1);
        
        solve(array, pivot + 1, high);
    }
    
   
}

export const Quicksort = (array) => {
    Time=0;
    disablebtn()
    solve(array, 0, array.length - 1);
  
    for(let i=0;i<array.length;i++){
    setTimeout(() => {
      
            get[i].style.backgroundColor="#66ff33";
       Enablebtn()

    },Time +10*i); }
    return array;



}



