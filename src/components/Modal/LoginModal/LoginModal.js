import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "../../Button";

import ForgotPassword from "./ForgotPassword";
import LoginDialog from "./LoginDialog";
import SignupDialog from "./SignupDialog";
import SuccessForgotPassword from "../NotifModal/SuccessForgotPassword";
import SuccessLogin from "../NotifModal/SuccessLogin";
import SuccessSignup from "../NotifModal/SuccesSignup";

function NestedModal(props) {
  const { open, setNestedModalOpen, setLoginOpen, setSignupOpen, onClose } =
    props;

  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closeButton") onClose();
  };

  const handleLogin = (event) => {
    setNestedModalOpen(false);
    setLoginOpen(true);
  };

  const handleSignup = (event) => {
    setNestedModalOpen(false);
    setSignupOpen(true);
  };

  if (open) {
    return (
      <div
        id="container"
        className="z-20 fixed inset-0 bg-neutrals2 bg-opacity-30 flex justify-center items-center cursor-default
    "
        onClick={handleOnClose}
      >
        <div className="flex bg-white justify-between items-center px-9 py-10 sm:px-[96px] sm:py-[72px] rounded-2xl relative">
          <div
            onClick={handleOnClose}
            className="w-8 h-8 shadow-xl rounded-full flex absolute bg-white -top-4 -right-4 cursor-pointer"
            id="closeButton"
          >
            <MdClose className="m-auto pointer-events-none" />
          </div>

          <div className="flex flex-col w-64 sm:w-[352px] items-center">
            <h4 className="text-neutrals2 text-3xl text-center items-center ">
              Selamat datang di <br />
              Tekos
            </h4>
            <div className="mt-8 w-full font-sans font-normal">
              <div className="flex flex-col">
                <p className="font-poppins"> Sudah punya akun?</p>
                <div className="mt-2">
                  <Button>
                    <button
                      className="w-full"
                      onClick={handleLogin}
                      id="switchToLoginButton"
                      aria-label="Toggle Login Modal"
                    >
                      Masuk
                    </button>
                  </Button>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-poppins">Belum Punya akun?</p>
                <div className="mt-2">
                  <Button>
                    <button
                      className="w-full"
                      onClick={handleSignup}
                      id="switchToSignupButton"
                      aria-label="Toggle Signup Modal"
                    >
                      Daftar
                    </button>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!open) {
    return null;
  }
}

const LoginModal = () => {
  const [NestedModalOpen, setNestedModalOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [successforgotPasswordOpen, setSuccessForgotPasswordOpen] =
    useState(false);
  const [successLoginOpen, setSuccessLoginOpen] = useState(false);
  const [successSignupOpen, setSuccessSignupOpen] = useState(false);

  const handleClose = () =>
    setLoginOpen(false) ||
    setSignupOpen(false) ||
    setNestedModalOpen(false) ||
    setForgotPasswordOpen(false) ||
    setSuccessForgotPasswordOpen(false) ||
    setSuccessLoginOpen(false) ||
    setSuccessSignupOpen(false);

  const handleNested = () => {
    setNestedModalOpen(true);
  };

  return (
    <>
      <div>
        <button
          className="px-[23px] py-2 bg-white hover:bg-primary1 rounded-full border border-primary1 text-primary1 hover:text-white text-sm font-bold h-10 "
          onClick={handleNested}
          id="loginModal"
        >
          Login
        </button>
        <NestedModal
          id="nestedModal"
          open={NestedModalOpen}
          setNestedModalOpen={setNestedModalOpen}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
          onClose={handleClose}
        />
        <LoginDialog
          id="loginDialogModal"
          open={loginOpen}
          setNestedModal={setNestedModalOpen}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
          setForgotPasswordOpen={setForgotPasswordOpen}
          setSuccessLoginOpen={setSuccessLoginOpen}
          onClose={handleClose}
        />
        <SignupDialog
          id="signupDialogModal"
          open={signupOpen}
          setNestedModal={setNestedModalOpen}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
          setSuccessSignupOpen={setSuccessSignupOpen}
          onClose={handleClose}
        />
        <ForgotPassword
          id="forgotPasswordModal"
          open={forgotPasswordOpen}
          setNestedModal={setNestedModalOpen}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
          setForgotPasswordOpen={setForgotPasswordOpen}
          setSuccessForgotPasswordOpen={setSuccessForgotPasswordOpen}
          onClose={handleClose}
        />
        <SuccessForgotPassword
          id="successForgotPasswordModal"
          open={successforgotPasswordOpen}
          setLoginOpen={setLoginOpen}
          setForgotPasswordOpen={setForgotPasswordOpen}
          setSuccessForgotPasswordOpen={setSuccessForgotPasswordOpen}
          onClose={handleClose}
        />
        <SuccessLogin
          id="successLoginModal"
          open={successLoginOpen}
          setLoginOpen={setLoginOpen}
          setSuccessLoginOpen={setSuccessLoginOpen}
        />
        <SuccessSignup
          id="successSignupModal"
          open={successSignupOpen}
          setLoginOpen={setLoginOpen}
          setSuccessSignupOpen={setSuccessSignupOpen}
          onClose={handleClose}
        />
      </div>
    </>
  );
};

export default LoginModal;
