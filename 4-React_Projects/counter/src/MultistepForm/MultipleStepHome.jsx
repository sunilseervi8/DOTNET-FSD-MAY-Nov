import React from 'react'
import Stepper from './Components/Stepper'
import StepperControl from './Components/StepperControl'
export default function MultipleStepHome() {
  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
    <div className='container horizontal mt-4'>
      {/* Steepper */}
      <Stepper/>
    </div>

      {/* Navigation controll */}
      <StepperControl/>
    </div>
  )
}
