let arr=[]
arr=[
    [1,2,3,4,5,5],
    [1,2,'a,','s','ff','sd'],
    [1,2,3,4,'@','#']
]
arr.forEach((ele)=>{
    console.log(ele);
});

// output 
// [ 1, 2, 3, 4, 5, 5 ]
// [ 1, 2, 'a,', 's', 'ff', 'sd' ]
// [ 1, 2, 3, 4, '@', '#' ]

arr.forEach((ele)=>{
    ele.forEach((val)=>{
        console.log(val)
    });
});///output in element in  the each line ;

let users = [
    { id: 1, username: 'Alice', age: 25 },
    { id: 2, username: 'Bob', age: 30 },
    { id: 3, username: 'Charlie', age: 35 }
];
console.log(users);