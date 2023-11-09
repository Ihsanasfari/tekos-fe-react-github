import React from "react";

import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function HelpModalKosan(props) {
  const { open, onClose } = props;

  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closebutton") onClose();
  };

  if (!open) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="z-10 fixed inset-0 bg-neutrals2 bg-opacity-30 flex justify-center items-center"
    >
      <div className="flex bg-white justify-between items-center px-9 py-10 xl:px-[96px] sm:py-[72px] rounded-2xl relative">
        <div
          onClick={handleOnClose}
          className="w-8 h-8 shadow-xl rounded-full flex absolute bg-white -top-4 -right-4 cursor-pointer"
          id="closebutton"
        >
          <MdClose className="m-auto pointer-events-none" />
        </div>

        <div className="flex flex-col gap-8  font-poppins w-64 sm:w-[400px] lg:w-fit">
          <h2 className="text-center font-sans text-2xl font-semibold lg:text-[32px]  lg:font-bold ">
            Selamat datang di <br />
            TEKOS
          </h2>

          <div className="flex flex-col gap-2">
            <h4 className="text-slate-800 text-2xl font-semibold">
              Kategori Kosan
            </h4>

            <div className="flex flex-col gap-2 divide-y-2 divide-dotted text-base font-normal lg:w-[800px]">
              <Link onClick={onClose} to="/helpFindKosan" className="">
                Bagaimana cara mencari kosan di TEKOS?
              </Link>
              <Link onClick={onClose} to="/helpFilterKosan" className="pt-2">
                Bagaimana menggunakan filter kosan di TEKOS?
              </Link>
              <Link onClick={onClose} to="/helpContactKosan" className="pt-2">
                Bagaimana cara mendapatkan kontak pemilik kosan di TEKOS?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpModalKosan;
