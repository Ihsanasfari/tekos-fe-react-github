import { useState } from "react";
import bgherokontrakan from "../assets/images/bgherokontrakan.webp";

import Button from "../components/Button";

import { BiFilterAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";
import { TbLocation } from "react-icons/tb";
import CardKontrakan1 from "../components/Card/CardKontrakan/CardKontrakan1";
import { getAllKontrakan } from "../redux/actions/kontrakan/kontrakanAction";
const Kontrakan = () => {
  const [isShownBedroom, setIsShownBedroom] = useState(false);
  const [isShownBathroom, setIsShownBathroom] = useState(false);

  const [isShownPublicFacility, setIsShownPublicFacility] = useState(false);
  const [isShownExpandFilter, setIsShownExpandFilter] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };
  const handleReset = () => {
    reset();
    setSelectedOption("");
    handleSubmit(handleOnFilter)();
  };
  const handleClickBedroom = (event) => {
    setIsShownBedroom((current) => !current);
  };
  const handleClickBathroom = (event) => {
    setIsShownBathroom((current) => !current);
  };

  const handleClickPublicFacility = (event) => {
    setIsShownPublicFacility((current) => !current);
  };

  const handleClickExpand = (event) => {
    setIsShownExpandFilter((current) => !current);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllKontrakan());
  }, [dispatch, handleSubmit]);

  const scrollToTargetSection = () => {
    const targetElement = document.getElementById("searchKontrakanInput");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleOnFilter = (e) => {
    const filterSlug = [
      {
        param: "keyword",
        value: e?.search?.length > 0 && e?.search
      },
      {
        param: "totalBedroom",
        value:
          e?.totalBedroom !== null &&
          e?.totalBedroom !== false &&
          e?.totalBedroom !== undefined &&
          e?.totalBedroom
      },
      {
        param: "totalBathroom",
        value:
          e?.totalBathroom !== null &&
          e?.totalBathroom !== false &&
          e?.totalBathroom !== undefined &&
          e?.totalBathroom
      },
      {
        param: "furniture",
        value: e?.furniture?.length > 0 ? e.furniture.join(",") : undefined
      },
      {
        param: "publicFacility",
        value:
          e?.publicFacility?.length > 0 ? e.publicFacility.join(",") : undefined
      },
      {
        param: "parking",
        value: e?.parking?.length > 0 ? e.parking.join(",") : undefined
      },
      {
        param: "sort",
        value:
          e?.sort !== null &&
          e?.sort !== false &&
          e?.sort !== undefined &&
          e?.sort
      }
    ].filter((data) => data.value !== false && data.value !== undefined);

    let slug = "";
    if (selectedOption !== "") {
      slug = `sort=${selectedOption}&`;
    }
    filterSlug?.map((data) => {
      slug = slug + data.param + "=" + data.value + "&";
    });

    dispatch(getAllKontrakan(slug));
    scrollToTargetSection();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleOnFilter)}>
        <div className="px-3 lg:px-9 2xl:px-40">
          {/**hero */}
          <div className=" md:pb-[136px] ">
            <div
              style={{
                backgroundImage: ` linear-gradient(130.48deg, rgba(236, 248, 252, 0.84) 22.56%, rgba(236, 248, 252, 0) 69.73%), url(${bgherokontrakan})`,
                backgroundSize: "cover"
              }}
              className="flex relative justify-between items-center p-10 md:p-[77px]  pb-[150px]  md:pb-[80px] 2xl:pb-[250px] rounded-3xl "
            >
              <div className="flex flex-col gap-4 md:h-[420px] justify-center">
                <h1 className="flex flex-col text-3xl gap-2 md:flex-col md:text-[96px] font-extrabold md:font-semibold md:leading-[96px] ">
                  <p>Cari</p>
                  <p>Kontrakan</p>
                  <p>dekat Tel-U</p>
                </h1>
                <p className="text-xs md:text-2xl">Satu rumah rame - rame</p>
              </div>

              <div className=" absolute justify-center shadow-lg rounded-3xl bg-[#FCFCFD] bg-opacity-80 backdrop-blur-xl px-5 md:p-[40px]  left-1/2 -translate-x-1/2 -bottom-4  md:-bottom-24 w-5/6">
                <div className="flex flex-col gap-8 ">
                  <div className="flex flex-col mt-2 font-poppins py-2 md:py-0">
                    <div className="flex pl-10 flex-row gap-3 items-center">
                      <TbLocation className="w-6 h-6 text-[#B1B5C3]" />
                      <span className="font-semibold text-xl md:text-2xl">
                        Lokasi
                      </span>
                    </div>

                    <div className="flex items-center border-b border-xs">
                      <input
                        className="bg-transparent  w-full md:px-8  focus:outline-none text-sm md:text-base "
                        placeholder="Masukan nama lokasi/area"
                        name="keyword"
                        {...register("search")}
                        id="searchKontrakanInput"
                        aria-label="search Kontrakan Input"
                      />
                      <div className="py-3 ">
                        <button
                          type="submit"
                          className="flex bg-[#3B71FE] w-12 h-12   md:w-16 md:h-16 items-center justify-center rounded-full p-4 cursor-pointer"
                          id="kontrakanSubmitButton"
                          aria-label="Search Kontrakan Button"
                        >
                          <BsSearch size={24} color={"#FFFFFF"} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row pt-7 font-poppins">
            {/**side filter */}
            <div className="px-8 md:w-[312px] md:px-0 justify-center mr-4 divide-y-2">
              <div className=" py-3">
                <ul className="list-item py-3">
                  <li>
                    <div className="flex items-center justify-center gap-3  ">
                      <BiFilterAlt className="text-[#777E90]" />
                      <span className="font-semibold">Filter</span>
                    </div>
                  </li>
                </ul>
              </div>
              {/* isi side filter */}
              <div
                className={`${
                  isShownExpandFilter ? "visible" : "hidden"
                }  px-8  md:px-0 justify-center divide-y-2  sm:visible sm:flex  sm:flex-col sm:order-1 static `}
              >
                {/* Total kamar */}
                <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
                  <span className="">Total Kamar</span>
                  <div className="flex flex-col text-sm gap-6 pl-5">
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("totalBedroom")}
                        value="2"
                        id="2BedroomRadioInput"
                        aria-label="2 Bedroom Radio Input"
                      />
                      <label htmlFor="">2 Kamar</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("totalBedroom")}
                        value="3"
                        id="3BedroomRadioInput"
                        aria-label="3 Bedroom Radio Input"
                      />
                      <label htmlFor="">3 Kamar</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("totalBedroom")}
                        value="4"
                        id="4BedroomRadioInput"
                        aria-label="4 Bedroom Radio Input"
                      />
                      <label htmlFor="">4 Kamar</label>
                    </div>
                    {isShownBedroom && (
                      <div className="flex flex-col text-sm gap-6">
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="radio"
                            {...register("totalBedroom")}
                            value="5"
                            id="5BedroomRadioInput"
                            aria-label="5 Bedroom Radio Input"
                          />
                          <label htmlFor="">5 Kamar</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="radio"
                            {...register("totalBedroom")}
                            value="6"
                            id="6BedroomRadioInput"
                            aria-label="6 Bedroom Radio Input"
                          />
                          <label htmlFor="">6 Kamar</label>
                        </div>
                      </div>
                    )}
                    <div>
                      {isShownBedroom === false ? (
                        <div
                          onClick={handleClickBedroom}
                          className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                          id="expandBedroom"
                        >
                          <p>Lihat Lainnya</p>
                          <HiChevronDown />
                        </div>
                      ) : (
                        <div
                          onClick={handleClickBedroom}
                          className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                          id="lessBedroom"
                        >
                          <p>Sembunyikan</p>
                          <HiChevronUp />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Total kamar mandi*/}
                <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
                  <span className="">Total Kamar Mandi</span>
                  <div className="flex flex-col text-sm gap-6 pl-5">
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("totalBathroom")}
                        value="2"
                        id="twoBathroomRadioInput"
                        aria-label="two Bathroom Radio Input"
                      />
                      <label htmlFor="">2 Kamar Mandi</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("totalBathroom")}
                        value="3"
                        id="threeBathroomRadioInput"
                        aria-label="three Bathroom Radio Input"
                      />
                      <label htmlFor="">3 Kamar Mandi</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("totalBathroom")}
                        value="4"
                        id="fourBathroomRadioInput"
                        aria-label="four Bathroom Radio Input"
                      />
                      <label htmlFor="">4 Kamar Mandi</label>
                    </div>
                    {isShownBathroom && (
                      <div className="flex flex-col text-sm gap-6">
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="radio"
                            {...register("totalBathroom")}
                            value="5"
                            id="fiveBathromRadioInput"
                            aria-label="five Bathrom Radio Input"
                          />
                          <label htmlFor="">5 Kamar Mandi</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="radio"
                            {...register("totalBathroom")}
                            value="6"
                            id="sixBathroomRadioInput"
                            aria-label="six Bathroom Radio Input"
                          />
                          <label htmlFor="">6 Kamar Mandi</label>
                        </div>
                      </div>
                    )}
                    <div>
                      {isShownBathroom === false ? (
                        <div
                          onClick={handleClickBathroom}
                          className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                          id="expandBathroom"
                          aria-label="expand Bathroom"
                        >
                          <p>Lihat Lainnya</p>
                          <HiChevronDown />
                        </div>
                      ) : (
                        <div
                          onClick={handleClickBathroom}
                          className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                          id="lessBathroom"
                          aria-label="less Bathroom"
                        >
                          <p>Sembunyikan</p>
                          <HiChevronUp />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Fasilitas Umum */}
                <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
                  <span className="">Fasilitas Umum</span>
                  <div className="flex flex-col text-sm gap-6 pl-5">
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="checkbox"
                        {...register("publicFacility")}
                        value="Ruang Jemur"
                        id="ruangJemurCheckboxInput"
                        aria-label="ruang Jemur Checkbox Input"
                      />
                      <label htmlFor="">Ruang Jemur</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="checkbox"
                        {...register("publicFacility")}
                        value="Ruang Tamu"
                        id="ruangTamuCheckboxInput"
                        aria-label="ruang Tamu Checkbox Input"
                      />
                      <label htmlFor="">Ruang Tamu</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="checkbox"
                        {...register("publicFacility")}
                        value="Ruang Dapur"
                        id="ruangDapurCheckboxInput"
                        aria-label="ruang Dapur Checkbox Input"
                      />
                      <label htmlFor="">Ruang Dapur</label>
                    </div>
                    {isShownPublicFacility && (
                      <div className="flex flex-col text-sm gap-6">
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="checkbox"
                            {...register("publicFacility")}
                            value="WiFi"
                            id="wifiCheckboxInput"
                            aria-label="wifi Checkbox Input"
                          />
                          <label htmlFor="">WiFi</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="checkbox"
                            {...register("publicFacility")}
                            value="TV"
                            id="tvCheckboxInput"
                            aria-label="tv Checkbox Input"
                          />
                          <label htmlFor="">TV</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="checkbox"
                            {...register("publicFacility")}
                            value="Kulkas"
                            id="kulkasCheckboxInput"
                            aria-label="kulkas Checkbox Input"
                          />
                          <label htmlFor="">Kulkas</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="checkbox"
                            {...register("publicFacility")}
                            value="Mesin Cuci"
                            id="mesincuciCheckboxInput"
                            aria-label="mesin cuci Checkbox Input"
                          />
                          <label htmlFor="">Mesin Cuci</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="checkbox"
                            {...register("publicFacility")}
                            value="Sofa"
                            id="sofaCheckboxInput"
                            aria-label="sofa Checkbox Input"
                          />
                          <label htmlFor="">Sofa</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="checkbox"
                            {...register("publicFacility")}
                            value="Air Panas"
                            id="airpanasCheckboxInput"
                            aria-label="air panas Checkbox Input"
                          />
                          <label htmlFor="">Air Panas</label>
                        </div>
                      </div>
                    )}
                    <div>
                      {isShownPublicFacility === false ? (
                        <div
                          onClick={handleClickPublicFacility}
                          className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                          id="expandPublicFacility"
                          aria-label="expand Public Facility"
                        >
                          <p>Lihat Lainnya</p>
                          <HiChevronDown />
                        </div>
                      ) : (
                        <div
                          onClick={handleClickPublicFacility}
                          className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                          id="lessPublicFacility"
                          aria-label="less Public Facility"
                        >
                          <p>Sembunyikan</p>
                          <HiChevronUp />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Area Parkir */}
                <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
                  <span className="">Area Parkir</span>
                  <div className="flex flex-col text-sm gap-6 pl-5">
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="checkbox"
                        {...register("parking")}
                        value="Parkir Mobil"
                        id="parkirMobilCheckboxInput"
                        aria-label="parkir Mobil Checkbox Input"
                      />
                      <label htmlFor="">Parkir Mobil</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="checkbox"
                        {...register("parking")}
                        value="Parkir Motor"
                        id="parkirMotorCheckboxInput"
                        aria-label="parkir Motor Checkbox Input"
                      />
                      <label htmlFor="">Parkir Motor</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="checkbox"
                        {...register("parking")}
                        value="Parkir Sepeda"
                        id="parkirSepedaCheckboxInput"
                        aria-label="parkir Sepeda Checkbox Input"
                      />
                      <label htmlFor="">Parkir Sepeda</label>
                    </div>
                  </div>
                </div>
                {/* side filter button */}
                <div className="flex  md:flex-col xl:flex-row items-center gap-8 py-4 text-sm sm:gap-2">
                  <div className="w-fit">
                    <button
                      id="resetFilterButton"
                      type="button"
                      onClick={() => handleReset()}
                      aria-label="Toggle Reset Filter"
                    >
                      <Button>Reset Filter</Button>
                    </button>
                  </div>
                  <button
                    id="submitFilterButton"
                    type="submit"
                    className="w-fit"
                    aria-label="Toggle Submit Filter"
                  >
                    <Button>Terapkan Filter</Button>
                  </button>
                </div>
              </div>
              {/* side filter expand mobile*/}
              <div className="flex justify-center py-4 visible sm:invisible">
                {isShownExpandFilter === false ? (
                  <div
                    onClick={handleClickExpand}
                    className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                    id="expandSideFilter"
                  >
                    <p>Tampilkan Filter</p>
                    <HiChevronDown />
                  </div>
                ) : (
                  <div
                    onClick={handleClickExpand}
                    className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                    id="lessSideFilter"
                  >
                    <p>Sembunyikan Filter</p>
                    <HiChevronUp />
                  </div>
                )}
              </div>
            </div>

            {/**Filter button & card*/}
            <div className="w-full  items-center  font-poppins divide-y-2">
              {/**Filter button*/}
              <div className="flex  sm:items-center sm:flex-row sm:gap-8 lg:flex-row  justify-center py-3 text-base text-[#777E90] font-semibold ">
                <label
                  type="button"
                  className="flex items-center cursor-pointer rounded-full"
                >
                  <input
                    type="radio"
                    className="sr-only"
                    {...register("sort")}
                    value="low"
                    checked={selectedOption === "low"}
                    onChange={() => handleRadioChange("low")}
                  />
                  <button
                    type="submit"
                    className={`px-4 border py-3 rounded-full border-blue-600 hover:bg-blue-600 hover:text-white  ${
                      selectedOption === "low"
                        ? " bg-blue-600 text-white"
                        : " bg-white text-primary1"
                    }`}
                    onClick={() => handleRadioChange("low")}
                    id="sortLowFilterButton"
                    aria-label="Sort Low Price Button"
                  >
                    <span>Harga Terendah</span>
                  </button>
                </label>
                <div className="sm:border-l-2 border-neutral-300 w-1 h-9 " />
                <label className="flex items-center cursor-pointer rounded-full">
                  <input
                    type="radio"
                    className="sr-only"
                    {...register("sort")}
                    value="high"
                    checked={selectedOption === "high"}
                    onChange={() => handleRadioChange("high")}
                  />
                  <button
                    type="submit"
                    className={`px-4 border py-3 rounded-full border-blue-600 hover:bg-blue-600 hover:text-white ${
                      selectedOption === "high"
                        ? " bg-blue-600 text-white"
                        : " bg-white text-primary1"
                    }`}
                    onClick={() => handleRadioChange("high")}
                    id="sortHighFilterButton"
                    aria-label="Sort High Price Button"
                  >
                    <span>Harga Tertinggi</span>
                  </button>
                </label>
                <div className="sm:border-l-2 border-neutral-300 w-1 h-9 " />
                <label className="flex items-center cursor-pointer rounded-full">
                  <input
                    type="radio"
                    className="sr-only"
                    {...register("sort")}
                    value="near"
                    checked={selectedOption === "near"}
                    onChange={() => handleRadioChange("near")}
                  />
                  <button
                    type="submit"
                    className={`px-4 border py-3 rounded-full border-blue-600 hover:bg-blue-600 hover:text-white ${
                      selectedOption === "near"
                        ? " bg-blue-600 text-white"
                        : " bg-white text-primary1"
                    }`}
                    onClick={() => handleRadioChange("near")}
                    id="sortNearFilterButton"
                    aria-label="Sort Nearest Button"
                  >
                    <span>Jarak Terdekat</span>
                  </button>
                </label>
              </div>
              {/**Scroll Product*/}
              <CardKontrakan1 />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Kontrakan;
