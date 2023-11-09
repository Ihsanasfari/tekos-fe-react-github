import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import forgotpwd1 from "../../../assets/images/forgotpwd1.webp";
import forgotpwd2 from "../../../assets/images/forgotpwd2.webp";
import forgotpwd3 from "../../../assets/images/forgotpwd3.webp";
import forgotpwd4 from "../../../assets/images/forgotpwd4.webp";
import forgotpwd5 from "../../../assets/images/forgotpwd5.webp";

const HelpForgotPwd = () => {
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
        <h1 className="text-neutrals3">Bagaimana jika saya lupa password?</h1>
        <div className="flex flex-col gap-[13px] items-center text-neutrals2">
          <div className="flex flex-col gap-[18px]">
            <p>
              Pertama, klik tombol <b>Lupa password</b>
            </p>
            <img width={710} height={356} alt="forgotpwd1" src={forgotpwd1} />
          </div>
          <div className="flex flex-col gap-[18px]">
            <p>
              Kedua, Isikan email kamu yang lupa, lalu klik{" "}
              <b>Reset password</b>
            </p>
            <img width={710} height={356} alt="forgotpwd2" src={forgotpwd2} />
          </div>
          <div className="flex flex-col gap-[18px]">
            <p>Ketiga, buka dan check email kamu</p>
            <img width={710} height={356} alt="forgotpwd3" src={forgotpwd3} />
          </div>
          <div className="flex flex-col gap-[18px]">
            <p>
              Keempat, <b>Copy token</b> dan klik link untuk{" "}
              <b>reset password</b>
            </p>
            <img width={710} height={356} alt="forgotpwd4" src={forgotpwd4} />
          </div>
          <div className="flex flex-col gap-[18px] max-w-[710px]">
            <p>
              Kelima, Isikan <b>token</b> yang sudah kamu copy dan{" "}
              <b>masukan password baru,</b> lalu klik <b>ubah password</b>
            </p>
            <img width={710} height={356} alt="forgotpwd5" src={forgotpwd5} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpForgotPwd;
