import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../Cards/Cards'    

export default function Dummy() {
    const [apiData,setApiData] = useState([])
    const api="4f273adce8b4444f85d7356f7e04b4b4"
    const { category } = useParams();// get teh data from the url
    // console.log("category",category)   
   useEffect( () => {
     
    async function getNewsData(){
        console.log("hey hello ")
        try {
        
          const data = await fetch(
            `https://newsapi.org/v2/everything?q=${category}&apiKey=${api}`
          );
          const respData = await data.json();
          setApiData(respData.articles)
          console.log(respData);
    
        }  
        catch (err) {
          console.log(err);
        }
      }
      getNewsData();
   },[category]);
 
  return (
    <div>
        <Cards apiData={apiData} />
        
    </div>
  )
}
