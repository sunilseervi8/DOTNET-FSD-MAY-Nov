
const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=607a8b3e10284723ab07bf29f5993191";
const newurl="https://newsapi.org/v2/everything?q=bitcoin&apiKey=6ccfda9f31324ff7a7266febaa734822"
const sportsurl="https://newsapi.org/v2/everything?q=sport&apiKey=607a8b3e10284723ab07bf29f5993191"
const politicsurl="https://newsapi.org/v2/everything?q=politics&apiKey=607a8b3e10284723ab07bf29f5993191"
const entertainmenturl="https://newsapi.org/v2/everything?q=entertainment&apiKey=607a8b3e10284723ab07bf29f5993191"
const technologyurl="https://newsapi.org/v2/everything?q=technology&apiKey=607a8b3e10284723ab07bf29f5993191"
const financeurl="https://newsapi.org/v2/everything?q=finance&apiKey=607a8b3e10284723ab07bf29f5993191"
const getNews=async()=>{
    try {
        const response=await fetch(newurl);
        const data=await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(error.message);
    }
}
const Explore=async()=>{
    try {
        const response=await fetch(newurl);
        const data=await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(error.message);
    }
}
const technology=async()=>{
    try {
        const response=await fetch(technologyurl);
        const data=await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(error.message);
    }
}
const SportNews=async()=>{
    try {
        const response=await fetch(sportsurl);
        const data=await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(error.message);
    }
}
const entertainment=async()=>{
    try {
        const response=await fetch(entertainmenturl);
        const data=await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(error.message);
    }
}
const politics=async()=>{
    try {
        const response=await fetch(politics);
        const data=await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(error.message);
    }
}
const financeBusness=async()=>{
    try {
        const response=await fetch(financeurl);
        const data=await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error(error.message);
    }
}
const displayNews=(articles)=>{
    const newsContainer=document.getElementById("card-container");
    newsContainer.innerHTML=" "; 
    articles.forEach(article => {
        if(article.urlToImage!=null){
        card=`
             <div class="col-md-4 custom-div-dynamic" >
            <div class="card mb-4">
             <img src="${article.urlToImage ||'https://via.placeholder.com/150'}" class="card-img-top" alt="News Image">
             <div class="card-body">
             <h5 class="card-title">${article.title}</h5>
             <p class="card-text">${article.description}</p>
             <p class="card-date">Date: ${new Date(article.publishedAt).toLocaleDateString()}</p>
             <a href="${article.url}" class="btn custom-btn-read">Read more</a>
              <a href="   " class="btn btn-like custom-btn"><i class="bi bi-hand-thumbs-up-fill"></i></a>
              <a href="${article.url} " class="btn btn-like custom-btn"><i class="bi bi-hand-thumbs-down-fill"></i></a>
              </div>
              </div>
        `;
        newsContainer.innerHTML+=card
        }
    });
}

document.getElementById("top").addEventListener("click",getNews);
document.getElementById("explore").addEventListener("click",getNews);
document.getElementById("technology").addEventListener("click",technology)
document.getElementById("sports").addEventListener("click",SportNews)
document.getElementById("entertainment").addEventListener("click",entertainment)
document.getElementById("politics").addEventListener("click",politics)
document.getElementById("finance").addEventListener("click",financeBusness)



