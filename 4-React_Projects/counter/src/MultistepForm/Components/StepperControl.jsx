import React from 'react'

export default function StepperControl() {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* placeholder for the back button */}
        <button className='bg-white text-slate-400 uppercase py-2 px-4
        rounded-xl font-semibold cursor-pointer border-2 border-slate-300
        hover:bg-slate-700 hover:text-white transition duration-200\
        ease-in-out'>
            back
        </button>
        <button className='bg-green-500 text-white uppercase py-2 px-4
        rounded-xl font-semibold cursor-pointer border-2
        hover:bg-slate-700 hover:text-white transition duration-200\
        ease-in-out'>
            back
        </button>
        
    </div>
  )
}
