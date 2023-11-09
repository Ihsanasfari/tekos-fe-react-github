import { destroyCookie } from "nookies";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../assets/icon/avatar_icon.webp";
import { getToken } from "../../helpers/helpers";
import { fetchUserDetails } from "../../redux/actions/auth/authAction";
const DropDownProfile = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userInfo);
  const [profileImage, setProfileImage] = useState(
    userDetails?.data?.profilPicture
  );
  const token = getToken();

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);
  const handleLogout = () => {
    if (token) {
      destroyCookie(null, "access_token");
      window.location.reload();
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex relative flex-col gap-2  items-center justify-center">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white    gap-2 active:border-blue duration-300 active:text-blue"
        id="dropdownLoggedUser"
        aria-label="Toggle Dropdown User"
      >
        <img
          src={profileImage}
          alt="profileImage"
          onError={() => {
            setProfileImage(avatar);
          }}
          className="md:cursor-pointer border w-10 h-10 rounded-full"
        />

        {/**drop down list */}
      </button>
      {isOpen && (
        <div className=" bg-white top-14 right-0 xl:-right-10 flex flex-col absolute items-start rounded-xl p-4  text-gray-500 shadow-2xl w-[292px] text-base font-sans font-bold">
          <div className="flex px-4  w-full">
            <p className="">Hello, {userDetails?.data?.name}</p>
          </div>

          <div className="w-full">
            <button
              onClick={handleLogout}
              className="flex mt-5 gap-2 w-full items-center justify-center border-2 rounded-full px-4 py-2 hover:rounded-full hover:bg-neutrals2 hover:text-white cursor-pointer hover:border-neutrals2  text-gray-900"
              id="logoutButton"
              aria-label="Toggle Logout Button"
            >
              Keluar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownProfile;
