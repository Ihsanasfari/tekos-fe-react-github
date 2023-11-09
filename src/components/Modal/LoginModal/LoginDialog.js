import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Button from "../../Button";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userLogin } from "../../../redux/actions/auth/authAction";

import SuccessLogin from "../NotifModal/SuccessLogin";

function LoginDialog(props) {
  const { open, setLoginOpen, onClose, setForgotPasswordOpen } = props;

  const { error, success } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  const switchForgotPassword = (event) => {
    setLoginOpen(false);
    openForgotPasswordMode();
  };

  const switchSuccessLogin = () => {
    setIsSuccessLoginOpen(true);

    const timer = setTimeout(() => {
      setIsSuccessLoginOpen(false);
      window.location.reload();
    }, 3000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (success) {
      switchSuccessLogin();
    }
  }, [success]);

  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closeButton") onClose();
  };

  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };

  const [isSuccessLoginOpen, setIsSuccessLoginOpen] = useState(false);

  const closeSuccessLoginModal = () => {
    setIsSuccessLoginOpen(false);
  };

  const openForgotPasswordMode = (event) => {
    setForgotPasswordOpen(true);
  };

  if (!open) return null;

  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="z-20 fixed inset-0 bg-neutrals2 bg-opacity-30 flex justify-center items-center"
    >
      <div className="flex bg-white justify-between items-center px-9 py-10 sm:px-[96px] sm:py-[72px] rounded-2xl relative font-poppins">
        <div
          onClick={handleOnClose}
          className="w-8 h-8 shadow-xl rounded-full flex absolute bg-white -top-4 -right-4 cursor-pointer"
          id="closeButton"
        >
          <MdClose className="m-auto pointer-events-none" />
        </div>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col w-64 sm:w-[356px] items-center gap-3  "
        >
          <div className="text-center items-center">
            <h4 className="text-neutrals2 text-4xl font-bold font-sans ">
              Masuk
            </h4>
          </div>

          <div className="w-full  ">
            {/* <div className="flex flex-col gap-8 items-center text-center justify-center text-white">
              <p className=" text-neutrals2 font-poppins text-base font-normal">
                Masuk dengan akun Google
              </p>
              <div className="flex w-[130px] items-center text-center justify-center ">
                <Button>
                  <BsGoogle />
                  <p className="ml-3 font-sans">Google</p>
                </Button>
              </div>
            </div> */}
            <div className="mt-4 flex flex-col gap-8 items-center text-center justify-center ">
              {error && (
                <p className="text-red-500 text-sm text-center rounded-xl p-2 border border-red-500 bg-red-50">
                  Email atau Password yang anda masukkan salah
                </p>
              )}
              <div className="flex flex-col w-full gap-4 font-normal text-sm items-center ">
                <div className="flex w-full flex-col  text-center justify-center ">
                  <input
                    className="bg-white  border-2 border-neutrals6 focus:outline-primary1  rounded-full w-full h-12 px-4"
                    placeholder="Masukan email"
                    type="email"
                    id="emailInput"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Wajib diisi"
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Format email salah"
                      }
                    })}
                  />
                  {errors?.email && (
                    <p
                      id="errorEmail"
                      className="text-red-600 text-left text-sm"
                    >
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
                <div className="flex w-full flex-col  text-center justify-center  ">
                  <div className="flex w-full items-center ">
                    <input
                      className="bg-white  border-2 border-neutrals6 focus:outline-primary1  rounded-full w-full h-12 px-4"
                      placeholder="Masukan password"
                      type={visible === false ? "password" : "text"}
                      id="passwordInput"
                      {...register("password", {
                        required: "Wajib diisi"
                      })}
                    />
                    <span
                      className="absolute  focus: text-2xl text-neutrals4  sm:-translate-x-1/2 right-12 sm:right-[100px] cursor-pointer "
                      id="visiblePassword"
                    >
                      {visible === false ? (
                        <AiOutlineEye onClick={toggle} />
                      ) : (
                        <AiOutlineEyeInvisible onClick={toggle} />
                      )}
                    </span>
                  </div>
                  {errors?.email && (
                    <p
                      id="errorEmail"
                      className="text-red-600 text-left text-sm"
                    >
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
                <button
                  id="loginSubmitButton"
                  className="flex w-full items-center text-center justify-center font-sans"
                  aria-label="Toggle Submit Login"
                >
                  <Button type="submit">Masuk</Button>
                </button>
              </div>
              <div className="font-bold font-poppins ">
                <p
                  id="switchToForgotPassword"
                  onClick={switchForgotPassword}
                  className="cursor-pointer"
                >
                  Lupa password?
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      {isSuccessLoginOpen && (
        <SuccessLogin
          open={isSuccessLoginOpen}
          setSuccessLoginOpen={setIsSuccessLoginOpen}
          onClose={closeSuccessLoginModal}
        />
      )}
    </div>
  );
}

export default LoginDialog;
