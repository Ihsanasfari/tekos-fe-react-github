import React, { useEffect, useState } from "react";
import Button from "../../Button";

import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { userRegistration } from "../../../redux/actions/auth/authAction";
function SignupDialog(props) {
  const { open, setLoginOpen, setSignupOpen, setSuccessSignupOpen, onClose } =
    props;

  const [phonenumber, setPhonenumber] = useState({
    value: "",
    message: "",
    isError: false
  });

  const { error, success } = useSelector((state) => state.registration);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onChangePhonenumber = (value) => {
    if (value.length < 18) {
      setPhonenumber((prevState) => ({
        ...prevState,
        isError: !value || value.length < 11 || value.length > 16,
        message: !value
          ? "Wajib diisi"
          : value.length < 11
          ? "Nomor telepon minimal 11 karakter"
          : value.length > 16
          ? "Nomor telepon maksimal 16 karakter"
          : "",
        value
      }));
    }
  };
  const dispatch = useDispatch();
  const submitForm = (data) => {
    dispatch(userRegistration(data));
  };

  const switchSuccess = (event) => {
    setSignupOpen(false);
    setSuccessSignupOpen(true);
  };

  useEffect(() => {
    if (success) {
      switchSuccess();
    }
  }, [success]);

  const switchLogin = (event) => {
    setSignupOpen(false);
    setLoginOpen(true);
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closeButton") onClose();
  };

  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };

  if (!open) return null;
  return (
    <div
      id="container"
      className="z-20 fixed inset-0 bg-neutrals2 bg-opacity-30 flex justify-center items-center"
      onClick={handleOnClose}
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
          className="flex flex-col w-64 sm:w-[356px] items-center gap-3"
        >
          <div className="text-center items-center">
            <h4 className="text-neutrals2 text-4xl font-bold font-sans">
              Daftar
            </h4>
          </div>

          <div className="w-full">
            <div className="mt-4 flex flex-col gap-8 items-center text-center justify-center font-normal">
              {error && (
                <p className="text-red-500 text-sm text-center rounded-xl p-2 border border-red-500 bg-red-50">
                  Email sudah digunakan
                </p>
              )}
              <div className="flex flex-col gap-8 ">
                <div className="flex gap-3 text-center justify-center">
                  <div className="flex w-1/2 sm:w-[186px] flex-col  text-center justify-center ">
                    <input
                      className="bg-white border-2 border-neutrals6 focus:outline-primary1  rounded-full w-full h-12 px-4"
                      placeholder="Masukan nama"
                      id="nameInput"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Wajib diisi"
                        },
                        maxLength: {
                          value: 100,
                          message: "Nama maksimal 100 karakter"
                        },
                        minLength: {
                          value: 2,
                          message: "Nama minimal 2 karakter"
                        }
                      })}
                    />
                    {errors?.name && (
                      <p className="text-sm text-red-500 text-left">
                        {errors?.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex w-1/2 sm:w-[151px] flex-col items-center text-center justify-center ">
                    <input
                      className="bg-white  border-2 border-neutrals6 focus:outline-primary1  rounded-full w-full h-12 px-4"
                      pattern="^[0-9]*$"
                      placeholder="No hp"
                      id="phoneInput"
                      {...register("phone", {
                        required: "Wajib diisi"
                      })}
                      type="text"
                      value={phonenumber?.value ?? ""}
                      onChange={(event) =>
                        event.target.validity.valid &&
                        onChangePhonenumber(event.target.value)
                      }
                    />
                    {(phonenumber?.isError || errors?.phone) && (
                      <p className="text-sm text-red-500 text-left">
                        {phonenumber.value.length > 0
                          ? phonenumber.message
                          : "Wajib diisi"}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex w-full  flex-col  text-center justify-center ">
                  <input
                    className="bg-white border-2 border-neutrals6 focus:outline-primary1  rounded-full w-full h-12 px-4"
                    placeholder="Masukan email kamu"
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
                    <p className="text-sm text-red-500 text-left">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full  text-center">
                  <div className="flex flex-row  w-full items-center ">
                    <input
                      className="bg-white border-2 border-neutrals6 focus:outline-primary1  rounded-full w-full h-12 px-4"
                      placeholder="Masukan password"
                      type={visible === false ? "password" : "text"}
                      id="passwordInput"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Wajib diisi"
                        },
                        minLength: {
                          value: 8,
                          message: "Password minimal 8 karakter"
                        },
                        maxLength: {
                          value: 50,
                          message: "Password maksimal 50 karakter"
                        },
                        pattern: {
                          value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                          message: "Format password salah"
                        }
                      })}
                    />

                    <span
                      className="absolute text-2xl text-neutrals5  -translate-x-1/2 right-12 sm:right-[110px] cursor-pointer "
                      id="visiblePassword"
                    >
                      {visible === false ? (
                        <AiOutlineEye onClick={toggle} />
                      ) : (
                        <AiOutlineEyeInvisible onClick={toggle} />
                      )}
                    </span>
                  </div>
                  {errors?.password && (
                    <p className="text-sm text-red-500 text-left">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex w-full items-center text-center justify-center text-base font-bold font-sans">
                <button
                  id="signupSubmitButton"
                  className="w-full"
                  type="submit"
                  aria-label="Toggle Submit Signup"
                >
                  <Button>Daftar</Button>
                </button>
              </div>
              <div className="flex">
                <p>Sudah punya akun? </p> &nbsp;
                <p
                  className="text-[#3B71FE] cursor-pointer"
                  onClick={switchLogin}
                  id="switchToLogin"
                >
                  Masuk
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupDialog;
