import React, { useState } from "react";

import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import kontrakan from "../../../assets/images/kontrakan.webp";
import kosan from "../../../assets/images/kosan.webp";
import telyunearby from "../../../assets/images/telyunearby.webp";
import HelpModalKosan from "./HelpModalKosan";
import HelpModalKontrakan from "./HelpModalKontrakan";
import HelpModalNearby from "./HelpModalNearby";

function HelpDialog(props) {
  const {
    open,
    onClose,
    setModalKosanOpen,
    setModalKontrakanOpen,
    setModalNearbyOpen
  } = props;

  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closebutton") onClose();
  };

  const switchHelpKosan = (event) => {
    onClose();
    setModalKosanOpen(true);
  };

  const switchHelpKontrakan = (event) => {
    onClose();
    setModalKontrakanOpen(true);
  };

  const switchHelpNearby = (event) => {
    onClose();
    setModalNearbyOpen(true);
  };

  if (!open) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="z-10 fixed inset-0 bg-neutrals2 bg-opacity-30 flex justify-center items-center"
    >
      <div className="flex bg-white justify-between items-center px-4 py-5   lg:px-9 lg:py-10 xl:px-[96px] sm:py-[72px] rounded-2xl relative">
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
            <h4 className="text-slate-800 text-2xl font-semibold">Kategori</h4>
            <div className="flex justify-between items-center lg:px-6 lg:gap-0 w-[250px] sm:w-[400px] lg:w-[800px]">
              <div
                className="flex flex-col gap-4  border items-center justify-center w-[80px] h-[128px] sm:w-[167px] sm:h-[148px] cursor-pointer"
                onClick={switchHelpKosan}
              >
                <div className="flex items-center justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] bg-[#F0B368] rounded-full bg-opacity-25 ">
                  <div className="flex items-center justify-center w-[54px]  h-[54px] sm:w-[70px] sm:h-[70px] bg-[#F0B368] rounded-full bg-opacity-50 ">
                    <img src={kosan} width={42} alt="kosan" />
                  </div>
                </div>

                <h4 className="font-normal sm:font-semibold text-xs text-center sm:text-base">
                  Kosan
                </h4>
              </div>
              <div
                className="flex flex-col gap-4  border items-center justify-center w-[80px] h-[128px] sm:w-[167px] sm:h-[148px] cursor-pointer"
                onClick={switchHelpKontrakan}
              >
                <div className="flex items-center justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] bg-[#F0B368] rounded-full bg-opacity-25 ">
                  <div className="flex items-center justify-center w-[54px]  h-[54px] sm:w-[70px] sm:h-[70px] bg-[#F0B368] rounded-full bg-opacity-50 ">
                    <img src={kontrakan} width={42} alt="kosan" />
                  </div>
                </div>

                <h4 className="font-normal sm:font-semibold text-xs text-center sm:text-base">
                  Kontrakan
                </h4>
              </div>
              <div
                className="flex flex-col gap-4  border items-center justify-center w-[80px] h-[128px] sm:w-[167px] sm:h-[148px] cursor-pointer"
                onClick={switchHelpNearby}
              >
                <div className="flex items-center justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] bg-[#F0B368] rounded-full bg-opacity-25 ">
                  <div className="flex items-center justify-center w-[54px]  h-[54px] sm:w-[70px] sm:h-[70px] bg-[#F0B368] rounded-full bg-opacity-50 ">
                    <img src={telyunearby} width={42} alt="kosan" />
                  </div>
                </div>

                <h4 className="font-normal sm:font-semibold text-xs text-center sm:text-base">
                  Telyu Nearby
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-slate-800 text-2xl font-semibold">FAQ</h4>

            <div className="flex flex-col gap-2 divide-y-2 divide-dotted text-base font-normal">
              <Link onClick={onClose} to="/helpSignup">
                Bagaimana cara mendaftarkan akun di TEKOS?
              </Link>
              <Link onClick={onClose} to="/helpLogin" className="pt-2">
                Bagaimana cara masuk ke dalam aplikasi TEKOS?
              </Link>
              <Link onClick={onClose} to="/helpForgotPwd" className="pt-2">
                Bagaimana jika saya lupa password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HelpModal = (props) => {
  const [HelpModalOpen, setHelpModalOpen] = useState(false);
  const [ModalKosanOpen, setModalKosanOpen] = useState(false);
  const [ModalKontrakanOpen, setModalKontrakanOpen] = useState(false);
  const [ModalNearbyOpen, setModalNearbyOpen] = useState(false);

  const handleClose = () =>
    setHelpModalOpen(false) ||
    setModalKosanOpen(false) ||
    setModalKontrakanOpen(false) ||
    setModalNearbyOpen(false);

  const handleHelp = () => {
    setHelpModalOpen(true);
  };

  return (
    <>
      <div>
        <div
          className="cursor-pointer font-sans font-bold text-sm text-neutrals4 hover:text-neutrals1"
          onClick={handleHelp}
        >
          Bantuan
        </div>
        <HelpDialog
          open={HelpModalOpen}
          setModalKosanOpen={setModalKosanOpen}
          setModalKontrakanOpen={setModalKontrakanOpen}
          setModalNearbyOpen={setModalNearbyOpen}
          onClose={handleClose}
        />
        <HelpModalKosan open={ModalKosanOpen} onClose={handleClose} />
        <HelpModalKontrakan open={ModalKontrakanOpen} onClose={handleClose} />
        <HelpModalNearby open={ModalNearbyOpen} onClose={handleClose} />
      </div>
    </>
  );
};

export default HelpModal;
