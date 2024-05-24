let btn=document.querySelector(".btn");
let text=document.querySelector("input");
let paragraph=document.querySelector("p");

let num=Math.floor(Math.random()*10 + 1);
btn.addEventListener("click",()=>{
if(text.value > num){
    paragraph.innerHTML="Greater than Randon number";
}else if(text.value<num){
    paragraph.innerHTML="Less than Random number";
}else{
    paragraph.innerHTML="Correct";
}
}  

);