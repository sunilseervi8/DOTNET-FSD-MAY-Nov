import './App.css';
import { useState } from 'react';
import data from "./data";
import Tours from "./Components/Tours";


const App = () => {
  const [tours, setTours] = useState(data);
  
  function removeTours(id){
    const newTours = tours.filter( tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length===0){
  return(
    <div className="refresh">
      <h2>Sorry 😔...... <br/>No More Tours Left</h2>
      <button onClick={() => setTours(data)} className="btn-white">Refresh</button>
    </div>
  )
}


  return (
    <div>
      <Tours tours={tours} removeTours={removeTours}></Tours>
    </div>
  );
}

export default App;
