import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import signup1 from "../../../assets/images/signup1.webp";
import signup2 from "../../../assets/images/signup2.webp";

const HelpSignup = () => {
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
          Bagaimana cara mendaftarkan akun di TEKOS?
        </h1>
        <div className="flex flex-col gap-[13px] items-center text-neutrals2">
          <div className="flex flex-col gap-[18px]">
            <p>
              Pertama, <b>klik tombol Login</b> pada pojok samping kanan atas
              lalu pilih <b>Daftar</b>
            </p>
            <img width={710} height={356} alt="signup1" src={signup1} />
          </div>
          <div className="flex flex-col gap-[18px]">
            <p>
              Kedua, isikan data - data yang diperlukan lalu{" "}
              <b>klik tombol daftar</b>
            </p>
            <img width={710} height={356} alt="signup2" src={signup2} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpSignup;
