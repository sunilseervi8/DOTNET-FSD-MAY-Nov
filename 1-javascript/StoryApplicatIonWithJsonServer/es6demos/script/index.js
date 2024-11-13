// //  // Normal Function
// //  function display(){
// //    return "sucess";
// // }
// // function display1()
// // {
// //     console.log("failed");
// // }
// // // Arrow function
// //  const result=()=>{
// //     return "hello";
// // }

// // // write a method to return positive number
// // const posiiveNmber=(input)=>{
// //     if(input>0)
// //     {
// //         return input;
// //     }

// // }

// // display();
// // display1();
// // console.log(display());
// // console.log(result());

// // console.log(posiiveNmber(-5))


// // callback demos
// // const Notification=(msg,callback, callback1)=>{
// //     console.log("Hai");
// //     callback(msg); 
// //     callback1(msg);
// // }

// // const Email=(data)=>{
// //     console.log(data+"email");
// // }
// // const Sms=(data)=>{
// //     console.log(data+"sms");
// // }

// // //Notification(Email, Sms);

// // Notification("Amount Credited",Email,(data)=>{
// //     console.log(data+"whatsappa")
// // })

// // Promise Demo

// // const addition = (a, b) => {

// //     let promise = new Promise((res, rej) => {

// //             const num1=Number(a);
// //             const num2=Number(b);
// //             console.log(num1);
// //             if (num1 < 0 || num2 < 0 || num1!=NaN || num2!=NaN) {
// //                 rej("Cannot Add the given values")
// //             }
// //             else {
// //                 res(a + b);
// //             }

// //     })
// // return promise;

// // }

// // addition(2).then((res)=>{
// //     console.log(res);
// // })
// // .catch(err=>{
// //     console.log(err);
// // }).finally(()=>{
// //     console.log("Thanks for visiting");
// // })

// // Fetch 

// let promise= fetch("http://localhost:3000/stories")

// promise.then(res=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


const addstory = () => {
    //     event.preventDefault();
    var story = {
        authorname: document.getElementById("txt_Author").value,
        storyname: document.getElementById("txt_story").value,
        noofread: document.getElementById("txt_reads").value
    };
    console.log(story);
    var result = fetch("http://localhost:3000/stories", {
        method: "post",
        body: JSON.stringify(story)
    });
    result.then((res) => {
        console.log(res.status);
    })
        .catch((err) => {
            console.log(err);
        })



}
async function  data(){

}

const  getStories= async()=>{
    var storyList=[];
    await fetch(`http://localhost:3000/stories`).then((res)=>{
        return res.json();    
    })
    .then((data)=>{
        console.log(data);
        storyList=data;
        console.log(storyList);
    })
    .catch((err)=>{
        console.log(err);
    })
  var elements= document.getElementById("storylist");

  elements.appe

    
}

getStories();
