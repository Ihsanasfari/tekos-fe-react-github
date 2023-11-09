import React from "react";

const Button = ({ children }) => {
  return (
    <div className="flex w-full px-4 py-3 bg-[#3B71FE] rounded-full text-white font-medium items-center text-center justify-center cursor-pointer">
      {children}
    </div>
  );
};
export default Button;
