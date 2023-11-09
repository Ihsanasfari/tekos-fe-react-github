import { BsCheck2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";
const SuccesSignup = (props) => {
  const { open, onClose, setLoginOpen, setSuccessSignupOpen } = props;

  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closeButton") onClose();
  };
  const switchLoginDialog = (event) => {
    setSuccessSignupOpen(false);
    setLoginOpen(true);
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

        <div className="flex flex-col gap-2 items-center justify-center  px-9 w-64 sm:w-fit font-sans">
          <div className="flex border w-fit rounded-full p-4 bg-blue-300 items-center justify-center ">
            <BsCheck2 className=" text-white text-7xl" />
          </div>

          <p className="text-2xl sm:text-4xl font-bold text-center">Selamat!</p>
          <p className="text-2xl sm:text-4xl font-bold text-center">
            kamu berhasil daftar
          </p>

          <p className="text-base font-normal font-poppins">
            Selamat datang di Tekos!
          </p>
          <button
            className="flex px-20 py-2 rounded-full bg-blue-600 items-center justify-center text-white cursor-pointer"
            id="switchToLoginDialog"
            onClick={switchLoginDialog}
            aria-label="Toggle Login Modal"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccesSignup;
