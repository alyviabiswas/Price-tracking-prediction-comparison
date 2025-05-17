import React from 'react';

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        px-6 py-2.5 
        bg-[#4169e1] hover:bg-[#3154b3] 
        text-white 
        rounded-md 
        transition-colors duration-200 
        font-medium 
        text-sm 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;