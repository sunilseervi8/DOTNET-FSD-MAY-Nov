function getRandomColor(){
const r=Math.floor(Math.random()*256);
const g=Math.floor(Math.random()*256);
const b=Math.floor(Math.random()*256);
return `rgb(${r},${g},${b})`;
}
//just for the sinfgle button
// const button=document.querySelector("button");
// button.addEventListener('click',function(){
//     button.style.backgroundColor=getRandomColor();
   
// });

//to reducwe below code we used the following 
// const buttons=document.querySelectorAll("button");
// for(let button of buttons){
//    button.addEventListener('click',function(){
//     button.style.backgroundColor=getRandomColor();
//    })
// }

// const hed=document.querySelectorAll("h4");
// for(let h of hed){
//     h.addEventListener('click',function(){
      
//         h.style.backgroundColor=getRandomColor();
//     })
// }
// /using this
function backColor(){
    this.style.backgroundColor=getRandomColor();
    this.style.color=getRandomColor();
}

const buttons=document.querySelectorAll("button");
for(let button of buttons){
   button.addEventListener('click', backColor)
}

const hed=document.querySelectorAll("h4");
for(let h of hed){
    h.addEventListener('click',backColor)
    

}