import React from "react";
import { Link } from "react-router-dom";
import logoTekos from "../assets/images/logotekos.webp";
const Footer = () => {
  return (
    <>
      <footer className="bg-white  ">
        <div className="mx-auto w-full max-w-screen-xl  p-4 py-6 lg:py-8 ">
          <div className="md:flex justify-between md:justify-center md:gap-[176px] sm:pb-14 ">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img width={161} height={36} src={logoTekos} alt="logoTekos" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-sm font-bold text-neutrals4 ">
              <div className="sm:w-40">
                <ul>
                  <li className="mb-4">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/telyuNearby">Telyu Nearby </Link>
                  </li>
                </ul>
              </div>
              <div className="sm:w-">
                <ul>
                  <li className="mb-4">
                    <Link to="/kosan">Kosan </Link>
                  </li>
                  <li>
                    <Link>Bantuan</Link>
                  </li>
                </ul>
              </div>
              <div className="sm:w-">
                <ul>
                  <li className="mb-4">
                    <Link to="/kontrakan">Kontrakan</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-center sm:justify-between border-t">
            <span className="text-sm text-gray-500 sm:text-center pt-1">
              Copyright © 2022 Tekos . All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
