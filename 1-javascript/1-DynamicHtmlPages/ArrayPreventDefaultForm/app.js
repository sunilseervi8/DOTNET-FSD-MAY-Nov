
/// task 1 preent the redirection tovthe other pagerr//once redireted then the adta will lost
// tak 3 to create the element add the value from intput and the value
const form=document.querySelector("#form-act")
const input=document.querySelector("#name");
const olList=document.querySelector("#ul-list");
form.addEventListener("submit",function(SomeE){
    SomeE.preventDefault()
    if(input.value===""){
          console.log("Empty")
         
    }
    else{
    
    const newEl=document.createElement("LI");
    newEl.innerText=input.value;
    olList.append(newEl);
    input.value="";
    }
})
