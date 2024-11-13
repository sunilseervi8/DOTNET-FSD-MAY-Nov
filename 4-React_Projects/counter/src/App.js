import "./App.css";
import { useState } from "react";
import MultipleStepHome from "./MultistepForm/MultipleStepHome";
function App() {
  // const[count,setCount] = useState(0);
  // function decreaseHandler() {
  // setCount(count-1);
    
  // }
  // function icreaseHandler() {
  //   setCount(count+1);
  // }

  return (
    
    <>
    {/* // <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
    //   <div className="text-[#0398d4] font-2xl">Increment && Decrement</div>
    //   <div className="flex justify-center gap-10 py-3 rounded-sm text-[25px] text-[#344151] bg-white">
    //     <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf text-5xl " >-</button>
    //     <div className="font-bold gap-12 text-5xl">{count}</div>
    //     <button onClick={icreaseHandler}  className="border-l-2 text-center w-20 border-[#bfbfbf text-5xl ">+</button>
    //   </div>

    //   <button onClick={() => setCount(0)} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
    // </div>  */}
    
   <MultipleStepHome/>

    </>
  )
}

export default App;
