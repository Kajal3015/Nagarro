let colorArr = document.querySelectorAll(".color");
let modal=document.querySelector(".textarea");
let color=["black","yellow","green","blue"];
let modal1=document.querySelector("body");

for(let i=0;i<colorArr.length;i++){
    colorArr[i].addEventListener("click",function(){
        if(colorArr[i].classList.contains("blue") || colorArr[i].classList.contains("black")){
            modal.style.backgroundColor = color[i];
            modal.style.color="white";
            modal.style.border="2px solid white"
            modal1.style.backgroundColor = color[i];
        }else{
            modal.style.backgroundColor = color[i];
            modal.style.color="black";
            modal.style.border="2px solid black";
            modal1.style.backgroundColor = color[i];
        }
         
    })
}