import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import contactnb1 from "../../../assets/images/contactnb1.webp";
import contactnb2 from "../../../assets/images/contactnb2.webp";

const HelpContactNb = () => {
  const navigate = useNavigate();
  return (
    <div className="px-2 md:px-[20px]  xl:px-[80px] 2xl:px-[230px] ">
      {/**Button back */}
      <div className="py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex border w-fit h-fit rounded-full  items-center justify-center px-3 py-2"
          aria-label="Toggle To Previous Page"
        >
          <div className="flex items-center justify-center  gap-3 font-semibold">
            <MdArrowBackIos className="w-2" />
            <p>Kembali</p>
          </div>
        </button>
      </div>

      {/** Title*/}

      <div className="flex flex-col gap-4 justify-center font-poppins text-sm sm:text-base font-medium px-4 sm:px-0">
        <h1 className="text-neutrals3">
          Bagaimana cara mendapatkan kontak pemilik makanan, minuman, dan jasa
          di TEKOS?
        </h1>
        <div className="flex flex-col gap-[13px] items-center text-neutrals2">
          <div className="flex max-w-[710px] flex-col gap-[18px]">
            <p>
              Pertama, setelah melakukan pencarian layanan atau jasa lakukan
              klik pada salah satu layanan atau jasa.
            </p>
            <img width={710} height={356} alt="contactnb1" src={contactnb1} />
          </div>
          <div className="flex flex-col gap-[18px]">
            <p>
              Kedua, <b>klik tombol whatsapp</b> untuk mendapatkan kontak
              pemilik layanan atau jasa.
            </p>
            <img width={710} height={356} alt="contactnb2" src={contactnb2} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpContactNb;
