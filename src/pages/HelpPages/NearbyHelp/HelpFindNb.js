import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import findnb1 from "../../../assets/images/findnb1.webp";
import findnb2 from "../../../assets/images/findnb2.webp";
import findnb3 from "../../../assets/images/findnb3.webp";

const HelpFindNb = () => {
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
          Bagaimana cara mencari informasi makanan, minuman, dan jasa di TEKOS?
        </h1>
        <div className="flex flex-col gap-[13px] items-center text-neutrals2">
          <div className="flex flex-col gap-[18px]">
            <p>
              Pertama, Dalam kondisi sudah Masuk,
              <b> klik halaman Telyu Nearby.</b>
            </p>
            <img width={710} height={356} alt="findnb1" src={findnb1} />
          </div>
          <div className="flex flex-col gap-[18px]">
            <p>
              Kedua, isikan layanan atau jasa disekitaran telyu lalu{" "}
              <b>klik tombol search</b> atau <b>klik enter</b>
            </p>
            <img width={710} height={356} alt="findnb2" src={findnb2} />
          </div>
          <div className="flex flex-col gap-[18px]">
            <p>Ketiga, layanan atau jasa akan muncul dibawah kolom search</p>
            <img width={710} height={356} alt="findnb3" src={findnb3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpFindNb;
