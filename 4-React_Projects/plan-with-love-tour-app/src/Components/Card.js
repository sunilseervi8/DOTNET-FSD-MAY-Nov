import React from 'react'
import { useState } from 'react'


function Card({ id, image, info, price, name, removeTours }) {
 const[readMore,setReadMore]=useState(false)
  const description=readMore?info :`${info.substring(0,200)}.... `

 

function reacMoreHandler(){
  setReadMore(!readMore)
}


    return (
    <div className='card' style={{ padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', maxWidth: '400px', margin: '20px auto', backgroundColor: '#f9f9f9' }}>
  <img src={image} className="image" alt="" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
  
  <div className="tour-details" style={{ padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h4 className='tour-price' style={{ color: '#7091E6', fontWeight: 'bold' }}>{price}</h4>
    <h4 style={{ fontSize: '1.2rem', margin: '0', color: '#00246B' }}>{name}</h4>
  </div>

  <div className='description' style={{ padding: '10px 0', fontSize: '1rem', lineHeight: '1.5' }}>
    {description}
    <span className='read-more' style={{ color: '#3D52A0', cursor: 'pointer' }} onClick={reacMoreHandler}>
      {readMore ? `show less` : `read more`}
    </span>
  </div>

  <button className='btn-red' style={{ padding: '10px 20px', backgroundColor: '#FF5A5F', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '15px' }} onClick={() => { removeTours(id) }}>
    Not interested
  </button>
</div>
 
  )
}
export default Card;