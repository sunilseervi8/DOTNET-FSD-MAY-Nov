let fruits =['apple ', 'papaya', 'bannana','star']
// Adding Elements to the Array
  fruits.push('dragon fruit')
// Using unshift() to add an element to the beginning:
fruits.unshift('graphes')
// Removing Elements from the Array
fruits.pop();// remove gragon fruit 
// Using shift() to remove the first element:
fruits.shift()
// Finding Elements in the Array
console.log(fruits.indexOf("apple"))
// Using includes() to check if an element exists:


fruits.forEach((val)=>{
    console.log(val)
})