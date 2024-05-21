let btn=document.querySelector(".btn");
let text=document.querySelector("input");
let paragraph=document.querySelector("p");


btn.addEventListener("click",()=>
    paragraph.innerHTML=(text.value+ (Math.random().toString(36))).slice(3).toUpperCase().charAt(3));