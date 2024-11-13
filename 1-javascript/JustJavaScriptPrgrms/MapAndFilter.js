//Map is tranform the array ex the tje upper case lovwer case 
let arr=['a','v','r','t','y']

 let upperElements= arr.map((val)=>{
    return val.toUpperCase();
  })
  console.log(upperElements)
//filter the aray based on the some condition


let filterArr=arr.filter((ele)=>{
   return  ele!='a'
})
console.log(filterArr)