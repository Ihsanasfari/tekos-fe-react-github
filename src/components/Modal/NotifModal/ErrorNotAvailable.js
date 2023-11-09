import { MdClose } from "react-icons/md";

import { BsExclamationLg } from "react-icons/bs";

import React from "react";

const ErrorNotAvailable = (props) => {
  const { onClose, type } = props;
  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closebutton") onClose();
  };
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="z-20 fixed inset-0 bg-neutrals2 bg-opacity-30 flex justify-center items-center
      "
    >
      <div className="flex bg-white justify-between items-center px-9 py-10 sm:px-[96px] sm:py-[72px] rounded-2xl relative">
        <div
          onClick={handleOnClose}
          className="w-8 h-8 shadow-xl rounded-full flex absolute bg-white -top-4 -right-4 cursor-pointer"
          id="closebutton"
        >
          <MdClose className="m-auto pointer-events-none" />
        </div>

        <div className="flex flex-col gap-8 items-center justify-center font-poppins px-9  w-64 sm:w-fit">
          <div className="flex border w-fit rounded-full p-4 bg-yellow-500 items-center justify-center ">
            <BsExclamationLg className=" text-white text-7xl" />
          </div>
          <div className="font-bold text-center text-base">
            <p>Mohon maaf {type} sudah tidak tersedia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotAvailable;
