
import React from "react";
import {useEffect} from 'react'
import ReactDOM from 'react-dom';
import App from "../App.js"
import "./sortinganalizer.css"
import { Form,Button,Navbar,NavItem ,Nav,FormGroup,Label, Input} from 'reactstrap';
import {selectionsort} from './SortingAlgo/selectionsort';
import  {Bubblesort}  from "./SortingAlgo/Bubblesort.js";
import { InsertionSort } from "./SortingAlgo/Insertionsort.js";
import { Quicksort } from "./SortingAlgo/Quicksort.js";
import { Mergesort } from "./SortingAlgo/Mergesort.js";
import { Heapsort } from "./SortingAlgo/Heapsort.js";
import "./disable&enablebtn";

export var time=400;
var array;
var arraysize=80;

function SortingAnalizer(){
    

    
    const getnewarray=()=>{
        array=[];
        for(var i=0;i<arraysize;i++){
            const randomnumber=Math.floor(Math.random()*485)+5;
            array[i]=randomnumber;
            
        }
        
   
    }
    
    
      getnewarray();
   
   
 
    

    const getnewarrayvalues=()=>{
      
    
        ReactDOM.render(
            
            <React.StrictMode>
              <App/>
            </React.StrictMode>,
            document.getElementById('root')
          );
       
          var arraybackground=document.getElementsByClassName("arrayset");
      for(var i=0;i<arraysize;i++){
  
        arraybackground[i].style.backgroundColor="cyan";
      };
        
    }

    //To get value of speed and size of array;
    
    const speedarray=(event)=>{
     
      if(event.target.name=="size"){
     
        arraysize=event.target.value;
     
        setTimeout(() => {
          getnewarrayvalues();
        }, 10);
     

          }
      else{
        time =200+(5-event.target.value)*400;
      }
    
  
      
    }
   

    return(
        <div className="maindiv">
            <Navbar className="navbar"  >
        
       
          <Nav >
            <NavItem className="newarr">
            <Button className="navbtn reset" size="sm" onClick={getnewarrayvalues}>Reset Array</Button>
            </NavItem>
            
          <Form className="form">
            <FormGroup className="speed">
        <Label for="exampleRange" className="labels" >Speed  </Label>
        <Input type="range" name="speed" id="speed" min="1" max="5"  onChange={speedarray} />
        
      </FormGroup>
      <FormGroup className="speed">
      <Label for="exampleRange" className="labels">Array.size()</Label>
        <Input  type="range" name="size" id="size" min="5" max="170"  onChange={speedarray}  />
        </FormGroup>
      </Form>
        
            <NavItem className="sort">
            <Button className="navbtn selection" size="sm" onClick={()=>{selectionsort(array);}}>Selection Sort</Button>
            <Button className="navbtn bubble" size="sm" onClick={()=>{Bubblesort(array);}}>Bubble Sort</Button>
            <Button className="navbtn insertion"  size="sm" onClick={()=>{InsertionSort(array)}}>Insertion Sort</Button>
            <Button className="navbtn merge" size="sm" onClick={()=>{Mergesort(array)}}>Merge Sort</Button>
            <Button className="navbtn heap" size="sm" onClick={()=>{Heapsort(array)}}>Heap Sort</Button>
            <Button className="navbtn quick" size="sm" onClick={()=>{Quicksort(array)}}>Quick Sort</Button>

            </NavItem>
            
          </Nav>
        
      
      </Navbar>
      
        <div className="arrayval">
            {array.map((value,idx,arr)=>(
                  
                <div className="arrayset" key={idx} style={{height:`${value}px`,width:`${2*((170)/arr.length)}px`}}></div>
                
                
            ))}
        </div>
    
        </div>
    )


    
    
  

}

export default  SortingAnalizer;
