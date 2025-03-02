import React from 'react';
import IconBtn from './IconBtn';

interface ModalData {
  text1: string;
  text2?: string;
  btn1Handler: () => void | void;
  btn1Text: string;
  btn2Handler: () => void | void;
  btn2Text: string;
}

interface ConfirmationModalProps {
  modalData: ModalData;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ modalData }) => {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-custom-blue p-6">
        <p className="text-2xl font-semibold text-richblack-5">
          {modalData?.text1}
        </p>
        {modalData?.text2 && (
          <p className="mt-3 mb-5 leading-6 text-richblack-200">
            {modalData?.text2}
          </p>
        )}
        <div className="flex items-center gap-x-4">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
          />
          <button
            className="cursor-pointer rounded-md py-[8px] px-[20px] font-semibold text-white bg-custom-blue "
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
