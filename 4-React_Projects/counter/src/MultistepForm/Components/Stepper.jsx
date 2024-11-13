import React, { useState } from "react";

// Stepper component that handles the form progression display
const Stepper = ({ steps, currentStep }: { steps: string[]; currentStep: number }) => {
  return (
    <div className="w-full flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center w-full">
          <div className="relative flex flex-col items-center">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 
                ${index <= currentStep ? "border-teal-600" : "border-gray-300"} 
                h-12 w-12 flex items-center justify-center py-3`}
            >
              {index + 1}
            </div>
            <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase">
              {step}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out 
              ${index < currentStep ? 'border-teal-600' : 'border-gray-300'}" />
          )}
        </div>
      ))}
    </div>
  );
};

// Example of step content for each step
const StepContent = ({ currentStep }: { currentStep: number }) => {
  switch (currentStep) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    default:
      return <Step1 />;
  }
};

// Step 1 form
const Step1 = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Step 1: Personal Information</h2>
      <label>
        Name:
        <input type="text" className="border p-2 rounded-lg w-full mt-2" />
      </label>
      <label>
        Email:
        <input type="email" className="border p-2 rounded-lg w-full mt-2" />
      </label>
    </div>
  );
};

// Step 2 form
const Step2 = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Step 2: Address Information</h2>
      <label>
        Address:
        <input type="text" className="border p-2 rounded-lg w-full mt-2" />
      </label>
      <label>
        City:
        <input type="text" className="border p-2 rounded-lg w-full mt-2" />
      </label>
    </div>
  );
};

// Step 3 form (final step)
const Step3 = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Step 3: Confirmation</h2>
      <p>Please confirm your details before submitting the form.</p>
    </div>
  );
};

// Main Stepper Form Component
const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Personal Info", "Address", "Confirmation"];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (currentStep === steps.length - 1) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="mt-8">
        <StepContent currentStep={currentStep} />
      </div>
      <div className="flex justify-between mt-8">
        <button
          className={`bg-gray-300 text-white py-2 px-4 rounded ${currentStep === 0 ? "opacity-50" : ""}`}
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            className="bg-teal-500 text-white py-2 px-4 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default StepperForm;
