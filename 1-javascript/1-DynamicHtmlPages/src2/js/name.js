let arraryName=["apple", 
"banana",
"cherry",
"date",

]

function add()
{
    let fruitname = document.getElementById("txt1")
    if(fruitname.value==="")
    {
        alert("please enter the fruit name before press the button")
    }
    else{
        arraryName.push(fruitname.value)
        document.getElementById("txt1").value=""
        display()
    }
}
function display()
{
    let page = "<table class='table table-hover table-dark'>"
    page+= "<tr><th>FruitsName</th><th>Delete</th></tr>"
    arraryName.forEach((n,i)=>(page+=`<tr><td>${n}</td><td><button<i class="fa-solid fa-trash-can text-success" onclick="deleteElement(${i})"></i></button></td></tr>`))
    page+="</table>"
    document.getElementById("display_table").innerHTML=page

}
function deleteElement(index)
{
    let tempArray = arraryName.filter((ele,i)=>(i!=index))
    arraryName=tempArray
    alert("element deleted")
    display()
}
display()