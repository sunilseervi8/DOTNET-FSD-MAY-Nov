const name1=document.getElementById("name");
const authorName=document.getElementById("authorName");
const genre=document.getElementById("genre");
const noOfChapters=document.getElementById("noOfChapters");
const noOfLikes=document.getElementById("noOfLikes");
const noOfReads=document.getElementById("noOfReads");
const submit=document.getElementById("submit");
const clickButton=document.querySelector(".button");
clickButton.onclick=function (){
   alert("welcome:- "+name1.value+"\nAuthorName :-"+authorName.value+"\nGenre:-"+genre.value);
   console.log("welcome:- "+name1.value+"\nAuthorName :-"+authorName.value+"\nGenre:-"+genre.value);
}
