import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../../redux/actions/forgotPassword/forgotPasswordAction";
import Button from "../../Button";
function ForgotPassword(props) {
  const dispatch = useDispatch();
  const { open, onClose, setSuccessForgotPasswordOpen, setForgotPasswordOpen } =
    props;
  const { error, success } = useSelector((state) => state.forgotPassword);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitForm = (data) => {
    dispatch(forgotPassword(data));
  };

  useEffect(() => {
    if (success) {
      setForgotPasswordOpen(false);
      setSuccessForgotPasswordOpen(true);
    }
  }, [success, setForgotPasswordOpen, setSuccessForgotPasswordOpen]);

  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closeButton") onClose();
  };

  if (!open) return null;
  return (
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
          id="closeButton"
        >
          <MdClose className="m-auto pointer-events-none" />
        </div>

        <form
          onSubmit={handleSubmit(submitForm)}
          className=" flex flex-col w-64 gap-8 sm:w-[356px] items-center "
        >
          <h4 className="text-neutrals2 text-3xl text-center items-center font-semibold font-sans">
            Lupa Password ?
          </h4>
          {error && (
            <p className="text-red-500 text-sm text-center rounded-xl p-2 border border-red-500 bg-red-50">
              Email yang dimasukkan tidak terdaftar
            </p>
          )}

          <div className="flex w-full flex-col gap-4 text-center justify-center font-poppins font-normal ">
            <input
              className="bg-white border-2 border-neutrals6 focus:outline-primary1 rounded-full w-full h-12 px-4"
              placeholder="Masukan email kamu"
              id="emailInput"
              {...register("email", {
                required: {
                  value: true,
                  message: "Wajib diisi"
                }
              })}
            />
            {errors?.email && (
              <p className="text-sm text-red-500 text-left">
                {errors?.email?.message}
              </p>
            )}

            <button
              id="resetPasswordSubmitButton"
              className="w-full"
              type="submit"
              aria-label="Toggle Submit Reset Password"
            >
              <Button>Reset Password</Button>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
