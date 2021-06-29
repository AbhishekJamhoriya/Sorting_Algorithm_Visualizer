

import { disablebtn } from "../disable&enablebtn";
import { Enablebtn } from "../disable&enablebtn";
import {time} from "../sortinganalizer"

const get = document.getElementsByClassName("arrayset");


let Time=0;
const changecolor=(mid,color)=>{
    get[mid].style.backgroundColor=color;
}


const leftorright=(result ,l,k)=>{
    
    get[l].style.height=`${result[k]}px`;
    get[l].style.backgroundColor="#40ff00";
}

const merge=(array,low,mid,high)=>{
    const n1=mid-low+1;
    const n2=high-mid;
    const left=[];
    const right=[];
    const left1=[];
    const right1=[];

    // console.log(right1);

    for(let i=0;i<n1;i++){
        left[i]=array[low+i];
        left1[i]=get[low+i].style.cssText;
    }
    for(let i=0;i<n2;i++){
        right[i]=array[mid+i+1];
        right1[i]=get[mid+i+1].style.cssText;
    }
    var k=0;
    var j=0;
    var l=low;
    while(n1>k && n2>j){
        if(left[k]>right[j]){
            array[l]=right[j];
        
            setTimeout(leftorright,Time,right,l,j);
            
        
            j++;

        }
        else{
            array[l]=left[k];
            
            setTimeout(leftorright,Time,left,l,k);
            
            
            k++;
            
        }
        l++;
        Time+=time/8
       
    }
    while(n1>k){
        array[l]=left[k];
        setTimeout(leftorright,Time,left,l,k);
       
        l++;
        k++;
        Time+=time/8

    }
    while(n2>j){
        array[l]=right[j];
        setTimeout(leftorright,Time,right,l,j);
        
    
        l++;
        j++;
        Time+=time/8

    }
   


}


const mergepartition=(array,low,high)=>{
    if(low>=high){
        
        return;
    }
    var mid=Math.floor((low+high)/2);
    setTimeout(changecolor,Time,mid,"#ff0000");
   
   Time+=time/8;
    mergepartition(array,low,mid);
    mergepartition(array,mid+1,high);
 
    merge(array,low,mid,high);
    
    
}

export const Mergesort=(array)=>{

Time=0;
    disablebtn();
    mergepartition(array,0,array.length-1);
    setTimeout(() => {
        Enablebtn();
    }, Time);
    console.log(array);

}