let educ=document.getElementById("educ");
let skill=document.getElementById("skill");
let pro=document.getElementById("pro");
let contact= document.getElementById("contact");
let education=document.querySelector(".Education");
let projects=document.querySelector(".project");
let skills=document.querySelector(".skills");
let cont=document.querySelector(".contact")
let a=false;
let b=false;
let c=false;
let d=false;

educ.addEventListener("click",function(){
    if(a){
       education.style.display="none";
       a=false;
    }else{
        education.style.display="inline-block";
        a=true;
    }
})

skill.addEventListener("click",function(){
    if(b){
        skills.style.display="none";
        b=false;
     }else{
         skills.style.display="flex";
         b=true;
     }
})

pro.addEventListener("click",function(){
    if(c){
        projects.style.display="none";
        c=false;
     }else{
        projects.style.display="inline-block";
         c=true;
     }
})

contact.addEventListener("click",function(){
    if(d){
        cont.style.display="none";
        d=false;
     }else{
        cont.style.display="inline-block";
         d=true;
     }
})