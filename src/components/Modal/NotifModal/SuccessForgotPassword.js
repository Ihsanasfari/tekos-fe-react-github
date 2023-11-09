import { BsCheck2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";

function SuccessForgotPassword(props) {
  const {
    open,
    setLoginOpen,

    onClose,
    setSuccessForgotPasswordOpen
  } = props;

  const switchLogin = (event) => {
    setSuccessForgotPasswordOpen(false);
    setLoginOpen(true);
  };

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

        <div className="flex flex-col gap-8 items-center justify-center font-poppins px-9 w-64 sm:w-fit">
          <div className="flex border w-fit rounded-full p-4 bg-primary4 items-center justify-center ">
            <BsCheck2 className=" text-white text-7xl" />
          </div>
          <div className="font-bold text-center text-base">
            <p>
              CHECK EMAIL ANDA, KAMI TELAH <br />
              MENGIRIMKAN LINK UNTUK <br />
              MERESET PASSWORD.
            </p>
          </div>
          <div className="flex font-normal gap-1">
            <p className="">Kembali untuk </p> &nbsp;
            <p
              className="text-primary1 cursor-pointer"
              onClick={switchLogin}
              id="switchToLoginDialog"
            >
              Masuk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessForgotPassword;
