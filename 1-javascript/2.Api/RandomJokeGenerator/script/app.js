const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = async() => {
    
    const serverJoke=   fetch(url)

    serverJoke.then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
    console.log((await serverJoke).status);
    

    // const response=await fetch(serverJoke)
    // console.log(response.status)
}
btn.addEventListener("click",getJoke);
getJoke();