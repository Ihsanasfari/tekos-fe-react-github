import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logoTekos from "../assets/images/logotekos.webp";
import LoginModal from "./Modal/LoginModal/LoginModal";
import HelpModal from "./Modal/HelpModal/HelpModal";

import { BsList } from "react-icons/bs";

import { Link, useLocation } from "react-router-dom";
import { fetchUserDetails } from "../redux/actions/auth/authAction";
import DropDownProfile from "./DropDown/DropDownProfile";
const NavigationBar = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userInfo);

  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);

  let [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-neutrals6 w-full sticky top-0 z-10">
        <div className="   max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:flex-nowrap">
          <div className="flex items-center flex-row-reverse flex-wrap ">
            <Link
              id="navigateToHomeLogo"
              to="/"
              className=" flex visible static md:visible w-32 sm:w-36 sm:only:h-8  sm:mr-3 "
            >
              <img
                src={logoTekos}
                width={161}
                height={36}
                alt="logoTekos"
                id="logoTekos"
              />
            </Link>
            <button
              type="button"
              className=" inline-flex items-center p-2 ml-1 text-sm text-neutrals4 rounded-lg md:hidden hover:bg-neutrals7 focus:outline-none focus:ring-2 focus:ring-neutrals7"
              onClick={() => setOpen(!open)}
              id="mobileExpandNav"
              aria-label="Toggle Mobile Navigation"
            >
              <BsList className="w-8 h-8" />
            </button>
          </div>

          <div className="flex items-center md:order-2 gap-2 sm:gap-7  ">
            <div className="items-center hidden md:block ">
              <HelpModal id="HelpModal" />
            </div>

            {userDetails ? <DropDownProfile /> : <LoginModal />}
          </div>

          <div
            className={`${
              open ? "visible" : "hidden"
            }  items-center justify-between w-full md:flex md:w-auto md:order-1 static `}
            id="menu"
          >
            <ul className="flex flex-col text-sm font-bold p-4 lg:mr-80 xl:mr-96 md:p-0 mt-4 border border-neutrals5 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  id="navigateToHomeText"
                  to="/"
                  className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-neutrals2 md:p-0 ${
                    currentPage === "/"
                      ? "text-neutrals2 underline underline-offset-8"
                      : "text-neutrals4"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  id="navigateToKosanText"
                  to="/kosan"
                  className={`block py-2 pl-3 pr-4rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-neutrals2 md:p-0 ${
                    currentPage === "/kosan"
                      ? "text-neutrals2 underline underline-offset-8"
                      : "text-neutrals4"
                  }`}
                >
                  Kosan
                </Link>
              </li>
              <li>
                <Link
                  id="navigateToKontrakanText"
                  to="/kontrakan"
                  className={`block py-2 pl-3 pr-4rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-neutrals2 md:p-0 ${
                    currentPage === "/kontrakan"
                      ? "text-neutrals2 underline underline-offset-8"
                      : "text-neutrals4"
                  }`}
                >
                  Kontrakan
                </Link>
              </li>
              <li>
                <Link
                  id="navigateToTelyunearbyText"
                  to="/telyunearby"
                  className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-neutrals2 md:p-0 ${
                    currentPage === "/telyunearby"
                      ? "text-neutrals2 underline underline-offset-8"
                      : "text-neutrals4"
                  }`}
                >
                  Telyu Nearby
                </Link>
              </li>
              <li>
                <div className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-neutrals2 md:p-0 text-neutrals4 visible md:hidden">
                  <HelpModal />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
