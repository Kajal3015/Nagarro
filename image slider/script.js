let prev=document.querySelector('.prev');
let next=document.querySelector('.next');
let image=document.querySelector('.images');
let circle=document.querySelectorAll('.ab');

let images=["https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2437297/pexels-photo-2437297.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=600"
           ];
let count=0;
next.addEventListener("click",function(){
    next.style.border='none';
    count=(count+1)%images.length;
    image.innerHTML=`<img class='rounded mx-auto d-block image' src='${images[count]}'></img>`;
    for(let j=0;j< circle.length;j++){
        circle[j].classList.remove("active");
    }
    circle[count].classList.add("active");
})

prev.addEventListener("click",function(){
    count=count-1;
    if(count<0){
       alert("It can't go any beyond");
       return;
    }
    image.innerHTML=`<img class='rounded mx-auto d-block image' src='${images[count]}'></img>`;
    for(let j=0;j< circle.length;j++){
        circle[j].classList.remove("active");
    }
    circle[count].classList.add("active");
})


for(let i=0;i<circle.length;i++){
    circle[i].addEventListener('click',function(){
        image.innerHTML=`<img class='rounded mx-auto d-block image' src='${images[i]}'></img>`;
        for(let j=0;j< circle.length;j++){
            circle[j].classList.remove("active");
        }
        circle[i].classList.add("active");
        
    })
}
