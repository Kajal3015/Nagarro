let display=document.querySelector(".display");
let input=document.querySelector(".card-text")

function CalculateWeight(){
    let weight=input.value;
    let kgweight=weight/1000;
    display.innerText= kgweight+"kg"
}