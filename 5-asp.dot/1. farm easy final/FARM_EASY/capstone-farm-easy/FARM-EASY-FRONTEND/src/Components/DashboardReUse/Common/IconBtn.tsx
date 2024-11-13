import React from 'react';

interface IconBtnProps {
  text: string;
  onclick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  outline?: boolean;
  customClasses?: string;
  type?: 'button' | 'submit' | 'reset';
}

const IconBtn: React.FC<IconBtnProps> = ({
  text,
  onclick,
  children,
  disabled = false,
  outline = false,
  customClasses = '',
  type = 'button',
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center ${
        outline ? 'border border-yellow-50 bg-transparent' : 'bg-richblack-900'
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-white ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline ? 'text-yellow-50' : ''}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default IconBtn;
