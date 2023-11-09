import { useState } from "react";

import bgherokosan from "../assets/images/bgherokosan.webp";

import Button from "../components/Button";

import { BiFilterAlt } from "react-icons/bi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import { BsSearch } from "react-icons/bs";
import { TbLocation } from "react-icons/tb";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllKosts } from "../redux/actions/kost/kostAction";

import { useForm } from "react-hook-form";
import CardKosan1 from "../components/Card/CardKosan/CardKosan1";
const Kosan = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isShownRoomFacility, setIsShownRoomFacility] = useState(false);
  const [isShownPublicFacility, setIsShownPublicFacility] = useState(false);
  const [isShownExpandFilter, setIsShownExpandFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  //default check duration radio button
  const [selectedDuration, setSelectedDuration] = useState("Bulanan");
  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };
  const handleReset = () => {
    setSelectedDuration("Bulanan");
    reset();
    handleSubmit(handleOnFilter)();
  };
  const handleClickRoomFacility = (event) => {
    setIsShownRoomFacility((current) => !current);
  };

  const handleClickPublicFacility = (event) => {
    setIsShownPublicFacility((current) => !current);
  };

  const handleClickExpand = (event) => {
    setIsShownExpandFilter((current) => !current);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllKosts());
  }, [dispatch, handleSubmit]);

  const scrollToTargetSection = () => {
    const targetElement = document.getElementById("searchKosanInput");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleOnFilter = (e) => {
    const filterSlug = [
      {
        param: "keyword",
        value: e?.search?.length > 0 && e?.search
      },
      {
        param: "duration",
        value:
          e?.duration !== null &&
          e?.duration !== false &&
          e?.duration !== undefined &&
          e?.duration
      },

      {
        param: "kostType",
        value:
          e?.kostType !== null &&
          e?.kostType !== false &&
          e?.kostType !== undefined &&
          e?.kostType
      },
      {
        param: "roomFacility",
        value:
          e?.roomFacility !== null &&
          e?.roomFacility !== false &&
          e?.roomFacility !== undefined &&
          e?.roomFacility
      },
      {
        param: "rules",
        value:
          e?.rules !== null &&
          e?.rules !== false &&
          e?.rules !== undefined &&
          e?.rules
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

    dispatch(getAllKosts(slug));
    scrollToTargetSection();
  };

  const handleChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleOnFilter)}>
        <div className="px-3 lg:px-9 2xl:px-40">
          {/**hero */}
          <div className=" md:pb-[136px] ">
            <div
              style={{
                backgroundImage: `linear-gradient(130.48deg, rgba(236, 248, 252, 0.84) 22.56%, rgba(236, 248, 252, 0) 69.73%), url(${bgherokosan})`,
                backgroundSize: "cover"
              }}
              className="flex relative justify-between items-center p-10 md:p-[77px] pb-[140px] md:pb-[80px] 2xl:pb-[250px] rounded-3xl "
            >
              <div className="flex flex-col gap-4 md:h-[420px] justify-center ">
                <h1 className="flex flex-col text-3xl gap-2 md:flex-col md:text-[96px] font-extrabold md:font-semibold md:leading-[96px] ">
                  <p>Cari Kos</p>
                  <p>dekat</p>
                  <p>Tel-U</p>
                </h1>
                <p className="text-xs md:text-2xl">
                  Bersama tekos, dapatkan kosan impianmu!
                </p>
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
                        className="bg-transparent  w-full  md:px-8  focus:outline-none text-sm md:text-base "
                        placeholder="Masukan nama lokasi/area"
                        name="keyword"
                        id="searchKosanInput"
                        {...register("search")}
                      />
                      <div className="py-3 ">
                        <button
                          id="KosanSubmitButton"
                          type="submit"
                          className="flex bg-[#3B71FE] w-12 h-12   md:w-16 md:h-16 items-center justify-center rounded-full p-4 cursor-pointer"
                          aria-label="Search Kosan Button"
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

          <div className="flex flex-col md:flex-row pt-7 font-poppins ">
            {/**side filter */}
            <div className="px-8 md:w-[312px] md:px-0 justify-center mr-4 divide-y-2">
              <div className="  py-3">
                <div className="flex items-center justify-center gap-3 py-3 ">
                  <BiFilterAlt className="text-[#777E90]" />
                  <span className="font-semibold text-base">Filter</span>
                </div>
              </div>
              {/* isi side filter */}
              <div
                className={`${
                  isShownExpandFilter ? "visible" : "hidden"
                }  px-8  md:px-0 justify-center divide-y-2  sm:visible sm:flex  sm:flex-col sm:order-1 static `}
                id="expandFilterMobile"
              >
                {/**Durasi */}
                <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
                  <span className="">Durasi</span>
                  <div className="flex flex-col text-sm gap-6 pl-5">
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("duration")}
                        value="Harian"
                        id="harianRadioInput"
                        checked={selectedDuration === "Harian"}
                        onChange={handleChange}
                      />
                      <label htmlFor="harianRadioInput">Harian</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("duration")}
                        value="Mingguan"
                        id="mingguanRadioInput"
                        checked={selectedDuration === "Mingguan"}
                        onChange={handleChange}
                      />
                      <label htmlFor="mingguanRadioInput">Mingguan</label>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("duration")}
                        value="Bulanan"
                        id="bulananRadioInput"
                        checked={selectedDuration === "Bulanan"}
                        onChange={handleChange}
                      />
                      <label htmlFor="bulananRadioInput">Bulanan</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("duration")}
                        value="Tahunan"
                        id="tahunanRadioInput"
                        checked={selectedDuration === "Tahunan"}
                        onChange={handleChange}
                      />
                      <label htmlFor="tahunanRadioInput">Tahunan</label>
                    </div>
                  </div>
                </div>
                {/**Jenis Kosan */}
                <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
                  <span className="">Jenis Kosan</span>
                  <div className="flex flex-col text-sm gap-6 pl-5">
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("kostType")}
                        value="Laki-Laki"
                        id="lakiRadioInput"
                        aria-label="laki-laki Radio Input"
                      />
                      <label>Laki-Laki</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("kostType")}
                        value="perempuan"
                        id="perempuanRadioInput"
                        aria-label="perempuan Radio Input"
                      />
                      <label>Perempuan</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("kostType")}
                        value="campur"
                        id="campurRadioInput"
                        aria-label="campur Radio Input"
                      />
                      <label>Campur</label>
                    </div>
                  </div>
                </div>

                {/**Peraturan */}
                <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
                  <span className="">Peraturan</span>
                  <div className="flex flex-col text-sm gap-6 pl-5">
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("rules")}
                        value="true"
                        id="rulesTrueRadioInput"
                        aria-label="rules Ada aturan Radio Input"
                      />
                      <label>Ada aturan</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="accent-primary1 w-5 h-5"
                        type="radio"
                        {...register("rules")}
                        value="false"
                        id="rulesFalseRadioInput"
                        aria-label="rules Bebas aturan  Radio Input"
                      />
                      <label>Bebas aturan</label>
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
                      </div>
                    )}
                    <div>
                      {isShownPublicFacility === false ? (
                        <div
                          onClick={handleClickPublicFacility}
                          className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                          id="expandBathroom"
                          aria-label="expand Bathroom"
                        >
                          <p>Lihat Lainnya</p>
                          <HiChevronDown />
                        </div>
                      ) : (
                        <div
                          onClick={handleClickPublicFacility}
                          className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                          id="lessBathroom"
                        >
                          <p>Sembunyikan</p>
                          <HiChevronUp />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/**Fasilitas Kamar
                 */}

                <div className="flex flex-col gap-4 py-6 px-8 font-semibold ">
                  <span>Fasilitas Kamar</span>
                  <div className="flex flex-col text-sm gap-6 pl-5">
                    <ul className="list-item ">
                      <li className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="checkbox"
                            {...register("roomFacility")}
                            value="Kasur"
                            id="kasurCheckboxInput"
                            aria-label="kasur Checkbox Input"
                          />
                          <label>Kasur</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="checkbox"
                            {...register("roomFacility")}
                            value="Bantal"
                            id="bantalCheckboxInput"
                            aria-label="bantal Checkbox Input"
                          />
                          <label>Bantal</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            className="accent-primary1 w-5 h-5"
                            type="checkbox"
                            {...register("roomFacility")}
                            value="Guling"
                            id="gulingCheckboxInput"
                            aria-label="guling Checkbox Input"
                          />
                          <label>Guling</label>
                        </div>

                        {isShownRoomFacility && (
                          <div>
                            <ul className="list-item ">
                              <li className="flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                  <input
                                    className="accent-primary1 w-5 h-5"
                                    type="checkbox"
                                    {...register("roomFacility")}
                                    value="Lemari"
                                    id="lemariCheckboxInput"
                                    aria-label="lemari Checkbox Input"
                                  />
                                  <label>Lemari</label>
                                </div>
                                <div className="flex items-center gap-3">
                                  <input
                                    className="accent-primary1 w-5 h-5"
                                    type="checkbox"
                                    {...register("roomFacility")}
                                    value="Meja"
                                    id="mejaCheckboxInput"
                                    aria-label="meja Checkbox Input"
                                  />
                                  <label>Meja</label>
                                </div>
                                <div className="flex items-center gap-3">
                                  <input
                                    className="accent-primary1 w-5 h-5"
                                    type="checkbox"
                                    {...register("roomFacility")}
                                    value="Kursi"
                                    id="kursiCheckboxInput"
                                    aria-label="kursi Checkbox Input"
                                  />
                                  <label>Kursi</label>
                                </div>
                                <div className="flex items-center gap-3">
                                  <input
                                    className="accent-primary1 w-5 h-5"
                                    type="checkbox"
                                    {...register("roomFacility")}
                                    value="Karpet"
                                    id="karpetCheckboxInput"
                                    aria-label="karpet Checkbox Input"
                                  />
                                  <label>Karpet</label>
                                </div>
                                <div className="flex items-center gap-3">
                                  <input
                                    className="accent-primary1 w-5 h-5"
                                    type="checkbox"
                                    {...register("roomFacility")}
                                    value="Kipas Angin"
                                    id="kipasAnginCheckboxInput"
                                    aria-label="kipas Angin Checkbox Input"
                                  />
                                  <label>Kipas Angin</label>
                                </div>
                                <div className="flex items-center gap-3">
                                  <input
                                    className="accent-primary1 w-5 h-5"
                                    type="checkbox"
                                    {...register("roomFacility")}
                                    value="AC"
                                    id="acCheckboxInput"
                                    aria-label="ac Checkbox Input"
                                  />
                                  <label>AC</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        )}
                        <div>
                          {isShownRoomFacility === false ? (
                            <div
                              onClick={handleClickRoomFacility}
                              className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                              id="expandRoomFacility"
                              aria-label="expand Room Facility"
                            >
                              <p>Lihat Lainnya</p>
                              <HiChevronDown />
                            </div>
                          ) : (
                            <div
                              onClick={handleClickRoomFacility}
                              className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                              id="lessRoomFacility"
                              aria-label="less Room Facility"
                            >
                              <p>Sembunyikan</p>
                              <HiChevronUp />
                            </div>
                          )}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/**Parkir */}
                <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
                  <span className="">Parkir</span>
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
                      <label>Parkir Mobil</label>
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
                      <label>Parkir Motor</label>
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
                      <label>Parkir Sepeda</label>
                    </div>
                  </div>
                </div>
                {/* side filter button */}
                <div className="flex  md:flex-col xl:flex-row items-center gap-8 py-4 text-sm lg:gap-2">
                  <div className="w-fit">
                    <Button>
                      <button
                        id="resetFilterButton"
                        type="button"
                        onClick={() => handleReset()}
                        aria-label="Reset Filter Button"
                      >
                        Reset Filter
                      </button>
                    </Button>
                  </div>
                  <div className="w-fit">
                    <button
                      id="submitFilterButton"
                      type="submit"
                      className="w-fit"
                      aria-label="Submit Filter Button"
                    >
                      <Button>Terapkan Filter</Button>
                    </button>
                  </div>
                </div>
              </div>
              {/* side filter expand mobile*/}
              <div className="flex justify-center py-4 visible sm:invisible ">
                {isShownExpandFilter === false ? (
                  <div
                    onClick={handleClickExpand}
                    className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                    id="expandSideFilter"
                    aria-label="expand Side Filter"
                  >
                    <p>Tampilkan Filter</p>
                    <HiChevronDown />
                  </div>
                ) : (
                  <div
                    onClick={handleClickExpand}
                    className="flex items-center gap-2 font-poppins text-sm font-medium justify-center cursor-pointer select-none text-gray-700"
                    id="lessSideFilter"
                    aria-label="less Side Filter"
                  >
                    <p>Sembunyikan Filter</p>
                    <HiChevronUp />
                  </div>
                )}
              </div>
            </div>

            {/**Filter button & card*/}
            <div className="w-full    items-center  font-poppins divide-y-2">
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
                    className={`px-4 border py-3 rounded-full border-blue-600 hover:bg-blue-600 hover:text-white   ${
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

              <CardKosan1 />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Kosan;
