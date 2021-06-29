
import {time} from "../sortinganalizer"
import { disablebtn } from "../disable&enablebtn";
import { Enablebtn } from "../disable&enablebtn";
const get = document.getElementsByClassName("arrayset");

var Time;

const change=(largest,i)=>{
    [get[largest].style.cssText,get[i].style.cssText]= [get[i].style.cssText,get[largest].style.cssText];
}

const changecolor=(i,color)=>
{
    get[i].style.backgroundColor=color;
}

const heapify=(array,n,i)=>{

    var largest=i;
    var right=2*i+2;
    var left=2*i+1;
    setTimeout(changecolor,Time-time/4,largest,"yellow")
    if(left<n && array[left]>array[largest]){
        largest=left;
    }
    if(right<n && array[right]>array[largest]){
        largest=right;
    }
    if(largest!=i){
        [array[i],array[largest]]=[array[largest],array[i]];
        setTimeout( change,Time,largest,i);
        setTimeout(changecolor,Time,largest,"cyan")
        setTimeout(changecolor,Time,i,"cyan")
        Time+=time/2;
        heapify(array,n,largest);
    }
    setTimeout(changecolor,Time,largest,"cyan")
        setTimeout(changecolor,Time,i,"cyan")

}

const Heap=(array,n)=>{

    var node=Math.floor(n/2);
    for(var i=node-1;i>=0;i--){
        heapify(array,n,i);
    }
    for(var i=n-1;i>=0;i--){
        [array[0],array[i]]=[array[i],array[0]];
        setTimeout( change,Time,0,i);
        setTimeout(changecolor,Time,i,"#66ff33");
        heapify(array,i,0);
    }

}


export const Heapsort=(array)=>{

    Time=0;
    disablebtn();
    Heap(array,array.length);
    for(let i=0;i<array.length;i++){
        setTimeout(() => {
            get[i].style.backgroundColor="#66ff33"
            Enablebtn();
        }, Time+10);
    }
    console.log(array);


}