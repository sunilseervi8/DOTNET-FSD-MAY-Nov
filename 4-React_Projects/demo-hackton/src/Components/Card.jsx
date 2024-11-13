import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
export default function Card({}) {
  const [newsData, setNewsData] = useState([])
  const {category}=useParams();
 const articles=newsData

  useEffect(async () => {
   var {data} =  await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=4f273adce8b4444f85d7356f7e04b4b4`);
   setNewsData(data.articles);
  },[0])
   
    console.log("msg " + articles)
  return (
    <div>
        <div className="container mt-5">
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card h-100">
              <img src={article.urlToImage || 'https://via.placeholder.com/150'} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.description ? article.description.substring(0, 100) + '...' : 'No description available.'}
                </p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}
