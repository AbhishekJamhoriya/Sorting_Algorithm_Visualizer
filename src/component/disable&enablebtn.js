

export const disablebtn=()=>{
    document.querySelector(".selection").disabled=true;
    document.querySelector(".bubble").disabled=true;
    document.querySelector(".insertion").disabled=true;
    document.querySelector(".merge").disabled=true;
    document.querySelector(".heap").disabled=true;
    document.querySelector(".quick").disabled=true;
    document.querySelector(".reset").disabled=true;
    document.querySelector("#speed").disabled=true;
    document.querySelector("#size").disabled=true;
    
}

export const Enablebtn=()=>{
    document.querySelector(".selection").disabled=false;
    document.querySelector(".bubble").disabled=false;
    document.querySelector(".insertion").disabled=false;
    document.querySelector(".merge").disabled=false;
    document.querySelector(".heap").disabled=false;
    document.querySelector(".quick").disabled=false;
    document.querySelector(".reset").disabled=false;
    document.querySelector("#speed").disabled=false;
    document.querySelector("#size").disabled=false;
    
}