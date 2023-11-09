import { MdArrowBackIos, MdClose } from "react-icons/md";

import { useState } from "react";

import { BiBuildings } from "react-icons/bi";
import { BsExclamationLg, BsWhatsapp } from "react-icons/bs";
import { RiFlag2Line } from "react-icons/ri";

import { NumericFormat } from "react-number-format";
import { useParams } from "react-router-dom";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../helpers/helpers";
import { getNearbyById } from "../../redux/actions/nearby/nearbyAction";
import LoginDialog from "../../components/Modal/LoginModal/LoginDialog";
import ForgotPassword from "../../components/Modal/LoginModal/ForgotPassword";
import SuccessForgotPassword from "../../components/Modal/NotifModal/SuccessForgotPassword";
import Loader from "../../components/Loader";
const ProductDetailNearby = () => {
  const { nearbyById, nearbyByIdLoading } = useSelector(
    (state) => state.nearbyById
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { idNearby } = useParams();
  useEffect(() => {
    dispatch(getNearbyById(idNearby));
  }, [idNearby, dispatch]);

  // token and whatsApp button
  const token = getToken();

  // convert phone number with 62
  const phoneNumber = nearbyById?.data?.phoneNumber;
  function convertPhoneNumber(phoneNumber) {
    return "62" + phoneNumber.slice(1);
  }
  const convertedNumber = phoneNumber ? convertPhoneNumber(phoneNumber) : null;

  //variable for all popup modal
  const [showPopup, setShowPopup] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isSuccessFPwdOpen, setIsSuccessFPwdOpen] = useState(false);

  //handler for chat the owner
  const handleClickChat = () => {
    if (token) {
      window.open(
        `https://wa.me/${convertedNumber}?text=Halo%2C%20saya%20dapat%20informasi%20${nearbyById?.data?.name}%20anda%20dari%20telyukost.com,%20dan%20saya%20tertarik%20dengan%20ini%20:%20telyukost.com/productDetailNearby/${idNearby}`
      );
    } else {
      setShowPopup(true);
    }
  };

  // close handler for pop up
  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closebutton")
      setShowPopup(false);
  };

  //open handler login modal
  const openLoginModal = (event) => {
    setShowPopup(false);
    setIsLoginOpen(true);
  };

  // close handler for login FPwd and succesFpwd modal
  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordOpen(false);
  };

  const closeSuccessFPwdModal = () => {
    setIsSuccessFPwdOpen(false);
  };

  return (
    <>
      {nearbyByIdLoading || !nearbyById ? (
        <div className="flex h-[600px]  gap-4 w-full items-center justify-center px-12 sm:px-32    text-gray-500 font-bold text-sm sm:text-2xl ">
          <Loader />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="px-2 md:px-[20px]  xl:px-[80px] 2xl:px-[230px] ">
          {/**Button back */}
          <div className="py-4">
            <button
              onClick={() => navigate(-1)}
              className="flex border w-fit h-fit rounded-full  items-center justify-center px-3 py-2"
              aria-label="Toggle Previous Page"
            >
              <div className="flex items-center justify-center  gap-2 font-semibold">
                <MdArrowBackIos className="w-2" />
                <p>Halaman Pencarian</p>
              </div>
            </button>
          </div>

          {/** Title*/}
          <div className="sm:py-8  flex flex-col sm:flex-row justify-between  ">
            <div className="flex flex-col gap-4 justify-center font-poppins">
              <h1
                id="ownerNearby"
                className="text-3xl sm:text-5xl font-semibold "
              >
                {nearbyById?.data?.name}
              </h1>

              <div className="flex flex-row gap-5 h-6 items-center text-sm  text-[#777E90]">
                <div id="area" className="flex items-center gap-2">
                  <RiFlag2Line />
                  <p>{nearbyById?.data?.area}</p>
                </div>

                <div id="distance" className="flex items-center gap-2">
                  <BiBuildings />
                  <p>{nearbyById?.data?.distance} meter ke telkom</p>
                </div>
              </div>
            </div>
            {/**button tittle */}

            <div
              id="status"
              className={`sm:text-2xl  font-bold tracking-wider
  ${nearbyById?.data?.delivered === true ? "text-primary4" : "text-red-500"}
  `}
            >
              {nearbyById?.data?.delivered === true ? (
                <p>[ Bisa diantar ]</p>
              ) : (
                <p>[ Tidak bisa diantar ]</p>
              )}
            </div>
          </div>

          {/**Detail Photo */}
          <div className="flex gap-4 sm:py-8 max-h-[300px]">
            <div className="flex py-3 w-full md:w-full justify-center sm:w-9/12 relative">
              <img
                height={300}
                className="rounded-xl"
                src={nearbyById?.data?.image}
                alt="image0"
              />
            </div>
          </div>
          {/**Info & pemesanan*/}
          <div className="py-2 sm:py-12 lg:py-8">
            <div className="flex flex-col-reverse items-center gap-7 lg:items-start  lg:flex-row justify-between">
              {/**Info */}
              <div className="flex flex-col gap-6 max-w-xs  sm:max-w-2xl lg:max-w-xl 2xl:max-w-3xl font-poppins">
                <div className="flex flex-col gap-6">
                  {/**Title */}

                  <h2 className="text-3xl font-semibold ">
                    Deskripsi
                    {nearbyById?.data?.category === "Lainnya"
                      ? ` `
                      : ` ${nearbyById?.data?.category}`}
                  </h2>
                  {/**Desc */}
                  <p className="text-[#777E90] ">
                    {nearbyById?.data?.description}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  {/**Title */}

                  <h2 className="text-3xl font-semibold ">Alamat</h2>
                  {/**Desc */}
                  <div className="text-[#777E90] ">
                    {nearbyById?.data?.address}
                  </div>
                </div>
              </div>

              {/**Ajukan pemesanan*/}

              <div className="flex  border border-[#E6E8EC] rounded-3xl shadow-lg sm:w-[450px] h-fit  items-center justify-center font-poppins ">
                <div className="flex sm:flex-col items-center gap-5 sm:gap-0 px-4 py-2 sm:px-8 sm:py-8 w-full">
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="text-xl sm:text-3xl font-semibold font-sans ">
                      <NumericFormat
                        displayType="text"
                        prefix="RP."
                        value={nearbyById?.data?.price}
                        thousandSeparator="."
                        decimalSeparator=" "
                      />
                    </h2>
                  </div>

                  {/**Button pesan */}
                  <div className="flex sm:w-full  gap-2 py-2 sm:py-4 font-sans justify-center">
                    <button
                      className="flex gap-3 px-5 py-3 w-full bg-primary4 rounded-full items-center justify-center text-white font-semi"
                      onClick={handleClickChat}
                      aria-label="Chat With The Owner"
                    >
                      <p className="font-sans font-bold text-xs sm:text-base">
                        WhatsApp
                      </p>
                      <BsWhatsapp />
                    </button>
                    {showPopup && (
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
                              <p>
                                Mohon melakukan login terlebih dahulu <br />
                                untuk melakukan chat dengan penjual
                              </p>
                            </div>
                            <button
                              className="w-full py-2 bg-primary1 rounded-full text-white "
                              onClick={openLoginModal}
                              aria-label="Toggle Login Modal"
                            >
                              Masuk
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {isLoginOpen && (
                      <LoginDialog
                        open={isLoginOpen}
                        setLoginOpen={setIsLoginOpen}
                        setForgotPasswordOpen={setIsForgotPasswordOpen}
                        onClose={closeLoginModal}
                      />
                    )}
                    {isForgotPasswordOpen && (
                      <ForgotPassword
                        open={isForgotPasswordOpen}
                        setForgotPasswordOpen={setIsForgotPasswordOpen}
                        setSuccessForgotPasswordOpen={setIsSuccessFPwdOpen}
                        onClose={closeForgotPasswordModal}
                      />
                    )}
                    {isSuccessFPwdOpen && (
                      <SuccessForgotPassword
                        open={isSuccessFPwdOpen}
                        setLoginOpen={setIsLoginOpen}
                        setForgotPasswordOpen={setIsForgotPasswordOpen}
                        setSuccessForgotPasswordOpen={setIsSuccessFPwdOpen}
                        onClose={closeSuccessFPwdModal}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b w-full h-1" />
        </div>
      )}
    </>
  );
};
export default ProductDetailNearby;
