import React, { useState } from "react";
import Button from "../components/Button";

import { MdClose } from "react-icons/md";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetPassword } from "../redux/actions/forgotPassword/resetPasswordAction";
import Home from "./Home";
const ResetPassword = (props) => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };

  const { error, success } = useSelector((state) => state.resetPassword);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();

  const submitForm = (data) => {
    delete data["confirm_password"];
    dispatch(resetPassword(data));
  };

  return (
    <>
      <Home />
      <div
        id="container"
        className="z-10 fixed inset-0 bg-neutrals2 bg-opacity-30 flex justify-center items-center
      "
      >
        <div className="flex bg-white justify-between items-center px-9 py-10 sm:px-[96px] sm:py-[72px] rounded-2xl relative">
          <Link
            to="/"
            className="w-8 h-8  rounded-full flex absolute bg-white -top-4 -right-4 cursor-pointer"
            id="closeNavigateToHome"
          >
            <MdClose className="m-auto pointer-events-none" />
          </Link>

          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col w-64 sm:w-[356px] items-center"
          >
            <h4 className="text-neutrals2 text-3xl text-center items-center font-semibold font-sans">
              Konfirmasi Reset
              <br />
              Password
            </h4>

            <div className="mt-8 w-full">
              <div className="flex flex-col gap-4 w-full items-center text-center justify-center font-poppins font-normal ">
                {error && (
                  <p className="text-red-500 text-sm text-center rounded-xl p-2 border border-red-500 bg-red-50">
                    Token yang Anda masukkan salah!
                  </p>
                )}
                {success && (
                  <div className="flex flex-col gap-2">
                    <p className="text-primary4 text-sm text-center rounded-xl p-2 border border-primary4 bg-green-50">
                      Password anda berhasil diubah, silahkan klik tombol ini
                      untuk kembali ke halaman awal
                    </p>
                    <Link
                      className="flex w-full px-4 py-3 bg-[#3B71FE] rounded-full text-white font-medium items-center text-center justify-center cursor-pointer"
                      to="/"
                    >
                      Kembali ke halaman awal
                    </Link>
                  </div>
                )}
                <div className="flex flex-col w-full   text-center  ">
                  <div className="flex">
                    <input
                      className="bg-white border-2 focus:outline-primary1  rounded-full w-full h-12 px-4"
                      placeholder="Masukan token"
                      {...register("token", {
                        required: {
                          value: true,
                          message: "Wajib diisi"
                        }
                      })}
                      id="tokenInput"
                    />
                  </div>
                  {errors?.token && (
                    <p className="text-sm text-red-500 text-left">
                      {errors?.token?.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full   ">
                  <div className="flex w-full items-center">
                    <input
                      className="bg-white  border-2 focus:outline-primary1  rounded-full w-full h-12 px-4"
                      placeholder="Masukan password baru"
                      type={visible === false ? "password" : "text"}
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
                      id="passwordInput"
                    />

                    <span
                      className="absolute text-2xl bg-white text-neutrals5  -translate-x-1/2 right-12 sm:right-[100px] cursor-pointer "
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
                <div className="flex flex-col w-full">
                  <div className="flex  items-center">
                    <input
                      className="bg-white border-2 focus:outline-primary1  rounded-full w-full h-12 px-4"
                      placeholder="Konfirmasi password baru"
                      type={visible === false ? "password" : "text"}
                      {...register("confirm_password", {
                        required: {
                          value: true,
                          message: "Wajib diisi"
                        },
                        validate: (val) => {
                          if (watch("password") !== val) {
                            return "Your passwords do no match";
                          }
                        }
                      })}
                      id="confirmPasswordInput"
                    />

                    <span
                      className="absolute text-2xl bg-white text-neutrals5  -translate-x-1/2 right-12 sm:right-[100px] cursor-pointer "
                      id="visiblePassword"
                    >
                      {visible === false ? (
                        <AiOutlineEye onClick={toggle} />
                      ) : (
                        <AiOutlineEyeInvisible onClick={toggle} />
                      )}
                    </span>
                  </div>
                  {errors?.confirm_password && (
                    <p className="text-sm text-red-500 text-left">
                      Password tidak sama
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="mt-2">
                  <div>
                    <button
                      className="w-full"
                      type="submit"
                      id="submitButton"
                      aria-label="Toggle Change Submit Reset Password"
                    >
                      <Button>Ubah Password</Button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
