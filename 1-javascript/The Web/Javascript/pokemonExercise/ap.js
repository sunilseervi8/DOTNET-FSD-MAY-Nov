// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container =document.querySelector("#container");
const baseUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

for(let i=0;i<1000;i++){
    const newImg=document.createElement('img');
    newImg.src=`${baseUrl}/${i+1}.png`;
    container.appendChild(newImg);
    container.append(i+1);
}

