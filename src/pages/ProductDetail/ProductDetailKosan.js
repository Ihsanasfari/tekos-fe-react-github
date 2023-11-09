import { MdArrowBackIos, MdClose } from "react-icons/md";

import { BiBuildings, BiImages } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";

import { BsExclamationLg, BsWhatsapp } from "react-icons/bs";

import React, { useEffect, useState } from "react";
import { RiFlag2Line } from "react-icons/ri";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import radiodetail from "../../assets/icon/radiodetail.webp";
import { getKostById, getRoomById } from "../../redux/actions/kost/kostAction";

import { useNavigate } from "react-router-dom";
import { getToken } from "../../helpers/helpers";
import CardSameKosan from "../../components/Card/CardKosan/CardSameKosan";
import CarouselImagesKosan from "../../components/Carousel/CarouselImages/CarouselImagesKosan";
import ForgotPassword from "../../components/Modal/LoginModal/ForgotPassword";
import LoginDialog from "../../components/Modal/LoginModal/LoginDialog";
import ErrorNotAvailable from "../../components/Modal/NotifModal/ErrorNotAvailable";
import SuccessForgotPassword from "../../components/Modal/NotifModal/SuccessForgotPassword";
import Loader from "../../components/Loader";
import { getAllKosts } from "../../redux/actions/kost/kostAction";
const ProductDetailKosan = () => {
  const { roomById } = useSelector((state) => state.roomById);
  const { kostById, kostByIdLoading } = useSelector((state) => state.kostById);
  const { idKosan, idRoom } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const value = params.get("value");
  const duration = params.get("duration");
  const [price, setPrice] = useState({
    value: value || 0,
    duration: `${duration}`
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getRoomById(idRoom)) && dispatch(getKostById(idKosan));
  }, [idRoom, idKosan, dispatch]);

  // token and whatsApp button
  const token = getToken();

  // convert phone number with 62
  const phoneNumber = kostById?.data?.user?.phone;
  function convertPhoneNumber(phoneNumber) {
    return "62" + phoneNumber.slice(1);
  }
  const convertedNumber = phoneNumber ? convertPhoneNumber(phoneNumber) : null;

  //variable for all popup modal
  const [showPopup, setShowPopup] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isSuccessFPwdOpen, setIsSuccessFPwdOpen] = useState(false);
  const [isErrorNtAvailable, setisErrorNtAvailable] = useState(false);

  //handler for chat the owner
  const handleClickChat = () => {
    if (roomById?.data[0].available === true) {
      if (token) {
        window.open(
          `https://wa.me/${convertedNumber}?text=Halo%2C%20saya%20dapat%20informasi%20kost%20anda%20dari%20telyukost.com,%20dan%20saya%20tertarik%20dengan%20kosanmu%20yang%ini%20:%20telyukost.com/productDetailKosan/${idKosan}/${idRoom}`
        );
      } else {
        setShowPopup(true);
      }
    } else {
      setisErrorNtAvailable(true);
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

  const closeErrorNtAvailable = () => {
    setisErrorNtAvailable(false);
  };

  // images carousel
  const [showImages, setShowImages] = useState(false);
  const handleClickImages = () => {
    setShowImages(true);
  };

  // close handler carousel
  const handleClose = () => setShowImages(false);

  const slicedImagesKosan = kostById?.data?.image.slice(1, 4);

  useEffect(() => {
    dispatch(getAllKosts());
  }, [dispatch]);

  return (
    <>
      {kostByIdLoading || !kostById ? (
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
                id="ownerKosan"
                className="text-3xl sm:text-5xl font-semibold "
              >
                {kostById?.data?.name} Tipe - {roomById?.data[0].name}
              </h1>

              <div className="flex flex-row gap-5 h-6 items-center text-sm  text-[#777E90]">
                <div className="flex items-center gap-2">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={kostById?.data?.user?.profilePicture}
                    alt="profilePicture"
                    id="profileUser"
                  />
                  <p id="ownerName">{kostById?.data?.user?.name}</p>
                </div>
                <div id="type" className="flex items-center gap-2">
                  <HiOutlineHome />
                  <p>Kosan</p>
                </div>
                <div id="area" className="flex items-center gap-2">
                  <RiFlag2Line />
                  <p>{kostById?.data?.area}</p>
                </div>

                <div id="distance" className="flex items-center gap-2">
                  <BiBuildings />
                  <p>{kostById?.data?.distance} meter ke telkom</p>
                </div>
              </div>
            </div>
            {/**button tittle */}

            <div
              id="status"
              className={`sm:text-2xl  font-bold tracking-wider
              ${
                roomById?.data[0].available === true
                  ? "text-primary4"
                  : "text-red-500"
              }
          `}
            >
              {roomById?.data[0].available === true ? (
                <p>[ TERSEDIA ]</p>
              ) : (
                <p>[ TIDAK TERSEDIA ]</p>
              )}
            </div>
          </div>

          {/**Detail Photo */}
          <div className="flex gap-4 flex-col lg:flex-row  max-w-fit lg:h-[812px]">
            <div className="flex justify-center relative ">
              <img
                width={1400}
                height={784}
                className="rounded-xl"
                src={kostById?.data?.image[0]}
                alt="image0"
              />

              <button
                className="flex absolute w-32 h-5  sm:w-44 sm:h-10 rounded-full items-center justify-center font-semibold sm:gap-3 bottom-6 left-6 bg-white"
                onClick={handleClickImages}
                aria-label="Toggle Carousel Images Kosan"
              >
                <BiImages className="w-5" />
                <p className="text-xs sm:text-base">Lihat Semua Foto</p>
              </button>
              {showImages && (
                <CarouselImagesKosan idKosan={idKosan} onClose={handleClose} />
              )}
            </div>

            {slicedImagesKosan.length > 0 ? (
              <div className="flex gap-4 h-fit lg:w-1/4 lg:flex-col justify-center items-center sm:gap-y-4">
                {slicedImagesKosan.map((image) => (
                  <div key={image} className="flex    items-center">
                    <img
                      className="h-36 sm:w-[256px]  sm:h-[256px]  rounded-xl  "
                      src={image}
                      alt="sideImage"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          {/**Info & pemesanan*/}
          <div className="py-2 sm:py-12 lg:py-8">
            <div className="flex flex-col-reverse items-center gap-7 lg:items-start  lg:flex-row justify-between">
              {/**Info */}

              <div className="flex flex-col max-w-xs gap-6 sm:max-w-2xl lg:max-w-xl 2xl:max-w-3xl font-poppins">
                <div className="flex flex-col">
                  {/**Title */}

                  <h2 className="text-3xl font-semibold ">Deskripsi Kosan</h2>
                </div>
                {/**Desc */}
                <p className="text-[#777E90] ">{kostById?.data?.description}</p>

                <div className="border-b w-full h-1" />
                {/**Durasi Kosan*/}
                <div className="text-[#777E90] font-poppins">
                  <h2 className="text-neutrals2 font-semibold text-2xl">
                    Durasi Kosan
                  </h2>
                  <div className="inset-0  ">
                    <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row  overflow-hidden pt-7 sm:divide-x divide-grey-400">
                      <div className="flex flex-col gap-6">
                        <div className="flex max-w-96 items-center gap-4">
                          <img
                            width={18}
                            height={18}
                            src={radiodetail}
                            alt="radiodetail"
                          />
                          <div className="flex gap-2">
                            <p className="text-sm">
                              {kostById?.data?.duration.join(" - ")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**Jenis Kosan*/}
                <div className="text-[#777E90]  font-poppins">
                  <h2 className="text-neutrals2 font-semibold text-2xl">
                    Jenis Kosan
                  </h2>
                  <div className="inset-0  ">
                    <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row  overflow-hidden pt-7 sm:divide-x divide-grey-400">
                      <div className="flex flex-col gap-6">
                        <div className="flex w-72 items-center gap-4">
                          <img
                            width={18}
                            height={18}
                            src={radiodetail}
                            alt="radiodetail"
                          />
                          <p className=" text-sm ">
                            {kostById?.data?.kostType}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**Fasilitas Kamar */}

                {roomById?.data[0].roomFacility.length > 0 ? (
                  <div className="text-[#777E90]  font-poppins">
                    <h2 className="text-neutrals2 font-semibold text-2xl">
                      Fasilitas Kamar
                    </h2>
                    <div className="inset-0  ">
                      <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row  overflow-hidden pt-7 sm:divide-x divide-grey-400">
                        <div className="grid grid-rows-3 grid-flow-col gap-6">
                          {roomById?.data[0].roomFacility.map(
                            (roomFacility) => (
                              <div
                                key={roomFacility}
                                className="flex w-48 items-center gap-4"
                              >
                                <img
                                  width={18}
                                  height={18}
                                  src={radiodetail}
                                  alt="radiodetail"
                                />
                                <p className=" text-sm ">{roomFacility}</p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/**Listrik*/}
                <div className="text-[#777E90]  font-poppins">
                  <h2 className="text-neutrals2 font-semibold text-2xl">
                    Listrik
                  </h2>
                  <div className="inset-0  ">
                    <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row  overflow-hidden pt-7 sm:divide-x divide-grey-400">
                      <div className="flex flex-col gap-6">
                        <div className="flex w-72 items-center gap-4">
                          <img
                            width={18}
                            height={18}
                            src={radiodetail}
                            alt="radiodetail"
                          />
                          <p className=" text-sm ">
                            {roomById?.data[0]?.electrityBill}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**Kamar Mandi*/}
                <div className="text-[#777E90]  font-poppins">
                  <h2 className="text-neutrals2 font-semibold text-2xl">
                    Kamar Mandi
                  </h2>
                  <div className="inset-0  ">
                    <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row  overflow-hidden pt-7 sm:divide-x divide-grey-400">
                      <div className="flex flex-col gap-6">
                        <div className="flex w-72 items-center gap-4">
                          <img
                            width={18}
                            height={18}
                            src={radiodetail}
                            alt="radiodetail"
                          />
                          <p className=" text-sm ">
                            {roomById?.data[0]?.bathroom}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**Fasilitas umm */}
                <div className="text-[#777E90]  font-poppins">
                  <h2 className="text-neutrals2 font-semibold text-2xl">
                    Fasilitas Umum
                  </h2>
                  <div className="inset-0  ">
                    <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row  overflow-hidden pt-7 sm:divide-x divide-grey-400">
                      <div
                        className={`grid ${
                          kostById?.data?.publicFacility?.length > 2
                            ? "grid-rows-3"
                            : kostById?.data?.publicFacility?.length > 1
                            ? "grid-rows-2"
                            : "grid-rows-1"
                        } grid-flow-col gap-6`}
                      >
                        {kostById?.data?.publicFacility.map(
                          (publicFacility) => (
                            <div
                              key={publicFacility}
                              className="flex w-48 items-center gap-4"
                            >
                              <img
                                width={18}
                                height={18}
                                src={radiodetail}
                                alt="radiodetail"
                              />
                              <p className=" text-sm ">{publicFacility}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/**Area Parkir */}
                <div className="text-[#777E90]  font-poppins">
                  <h2 className="text-neutrals2 font-semibold text-2xl">
                    Area Parkir
                  </h2>
                  <div className="inset-0  ">
                    <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row  overflow-hidden pt-7 sm:divide-x divide-grey-400">
                      <div
                        className={`grid ${
                          kostById?.data?.parking?.length > 2
                            ? "grid-rows-3"
                            : kostById?.data?.parking?.length > 1
                            ? "grid-rows-2"
                            : "grid-rows-1"
                        }  grid-flow-col gap-6`}
                      >
                        {kostById?.data?.parking.map((parking) => (
                          <div
                            key={parking}
                            className="flex w-48 items-center gap-4"
                          >
                            <img
                              width={18}
                              height={18}
                              src={radiodetail}
                              alt="radiodetail"
                            />
                            <p className=" text-sm ">{parking}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/**Peraturan */}
                <div className="text-[#777E90] py-6 font-poppins">
                  <h2 className="text-neutrals2 font-semibold text-2xl">
                    Peraturan
                  </h2>
                  <div className="inset-0  ">
                    <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row  overflow-hidden pt-7 sm:divide-x divide-grey-400">
                      <div className="flex flex-col gap-6">
                        <div className="flex w-full items-center gap-4">
                          <span className=" text-sm ">
                            {kostById?.data?.rules}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/**Ajukan pemesanan*/}

              <div className="flex border border-[#E6E8EC] rounded-3xl shadow-lg w-[380px] sm:w-[450px] h-fit  items-center justify-center font-poppins ">
                <div className="flex flex-col items-center gap-5 sm:gap-2 xl:gap-4 px-4 py-2 sm:px-8 sm:py-8 w-full">
                  <div className="flex flex-col gap-2 items-center">
                    <h2 className="text-xl sm:text-3xl font-semibold font-sans ">
                      <NumericFormat
                        displayType="text"
                        prefix="RP."
                        value={price?.value}
                        thousandSeparator="."
                        decimalSeparator=" "
                      />
                    </h2>
                  </div>
                  <div className="flex lg:flex-row gap-2 items-center">
                    {roomById?.data[0].price?.map((price) => {
                      return (
                        <button
                          key={price?.duration}
                          id={`priceButton${price?.duration}`}
                          onClick={() => {
                            setPrice(price);
                          }}
                          className="border border-neutrals5 px-4 py-2 rounded-md focus:border-primary1 focus:border-2 text-xs lg:text-base"
                          aria-label={`Toggle Price ${price?.duration}`}
                        >
                          {price?.duration}
                        </button>
                      );
                    })}
                  </div>

                  {/**Button pesan */}
                  <div className="flex w-full  gap-2  font-sans justify-center">
                    <button
                      className={`flex gap-3 px-5 py-3 w-full  ${
                        roomById?.data[0].available === true
                          ? "bg-primary4"
                          : "bg-neutrals5"
                      }  rounded-full items-center justify-center text-white font-semi`}
                      onClick={handleClickChat}
                      id="chatOwnerButton"
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
                                untuk melakukan chat dengan pemilik kosan
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
                    {isErrorNtAvailable && (
                      <ErrorNotAvailable
                        open={isErrorNtAvailable}
                        onClose={closeErrorNtAvailable}
                        type={"kosan"}
                      />
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
          {/**Jenis Kamar Lainnya*/}
          <div className="py-8">
            <h2 className="text-2xl font-semibold ">Jenis Kamar Lainnya</h2>
            <CardSameKosan />
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetailKosan;
