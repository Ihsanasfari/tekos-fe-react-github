import React from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import telyuLoading from "../../../assets/images/telyuLoading.webp";
import { removeSpace } from "../../../helpers/helpers";
import Loader from "../../Loader";
const CardSameKosan = () => {
  const { kosts, kostsLoading } = useSelector((state) => state.kosts);
  const { idKosan, idRoom } = useParams();
  const filteredSameKost = kosts?.data
    .filter((item) => item.status === "Terverifikasi")
    .filter((item) => item._id === idKosan)
    .filter((item) => item.room._id !== idRoom);

  return (
    <>
      {kostsLoading || !kosts ? (
        <div className="flex  pt-4 sm:pt-[234px] gap-4 w-full items-center justify-center px-12 sm:px-32    text-gray-500 font-bold text-sm sm:text-2xl ">
          <Loader />
          <p>Loading...</p>
        </div>
      ) : filteredSameKost?.length > 0 ? (
        <div className="grid px-2  py-8 grid-cols-2 gap-8   lg:grid-cols-3 sm:px-20 ">
          {filteredSameKost?.map((kost) => {
            return (
              <div
                key={kost?.room?._id}
                className="flex flex-col border relative rounded-3xl h-[320x] sm:h-[386px] md:w-[250px]   xl:w-[300px]  bg-white  "
              >
                <Link
                  id={`detailKosan${removeSpace(kost?.name)}tipe${
                    kost?.room?.name
                  }`}
                  to={`/productDetailKosan/${kost._id}/${kost?.room?._id}`}
                >
                  <div className="group">
                    <div className="group relative h-[130px] sm:h-[165px] md:h-[200px]">
                      <img
                        className=" flex flex-none order-[0px] h-full sm:h-[165px] md:h-[200px] w-full  rounded-t-3xl"
                        src={kost.image[0]}
                        alt="image0"
                      />
                      {/**Kost type*/}
                      <div
                        className="px-1 py-1 sm:px-4 sm:py-2 shadow-xl rounded-md flex absolute bg-gray-100  left-4 top-4 cursor-pointer "
                        id={`kostType${kost?.kostType}`}
                      >
                        <p className=" text-xs font-bold font-poppins uppercase ">
                          {kost?.kostType}
                        </p>
                      </div>
                      {/**Hover */}
                      <div className="absolute w-full  h-full sm:h-[165px] md:h-[200px] bg-neutrals2/50 rounded-t-3xl flex items-center justify-center  -top-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div
                          className="group px-1 py-1 sm:px-4 sm:py-2 shadow-xl rounded-md flex absolute left-4 top-4 cursor-pointer group-hover:bg-gray-100 "
                          id={`kostType${kost?.kostType}`}
                        >
                          <p className="text-xs font-bold font-poppins uppercase ">
                            {kost?.kostType}
                          </p>
                        </div>
                        <p className="bg-blue-600 text-white rounded-full px-[14.5px] py-2 sm:py-3  text-xs">
                          Lihat detail
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 sm:px-6  pt-2 font-poppins ">
                    <div className="flex items-center justify-center">
                      <div
                        className={`text-xs  font-bold tracking-wider
                            ${
                              kost?.room?.available === true
                                ? "text-primary4"
                                : "text-red-500"
                            }
                            `}
                      >
                        {kost?.room?.available === true ? (
                          <p>TERSEDIA</p>
                        ) : (
                          <p>TIDAK TERSEDIA</p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col py-1 sm:py-5 gap-2 justify-between ">
                      <div className="flex flex-col sm:flex-row sm:gap-2 ">
                        <span className="text-sm w-[125px] sm:w-fit  sm:text-base font-light sm:font-medium truncate overflow-hidden whitespace-nowrap hover:whitespace-normal ">
                          {kost?.name} Tipe - {kost?.room?.name}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center ">
                        <span
                          id={`priceKosan${kost?.room?.price?.duration}`}
                          className="gap-[6px] w-[125px] sm:w-fit overflow-hidden whitespace-nowrap hover:whitespace-normal  text-primary4  font-bold  rounded-md sm:px-0 py-1  sm:py-3 items-center justify-center text-xs  truncate"
                        >
                          <NumericFormat
                            displayType="text"
                            prefix="RP."
                            value={kost?.room?.price?.value}
                            className="truncate"
                            thousandSeparator="."
                            decimalSeparator=" "
                          />{" "}
                          - {kost?.room?.price?.duration}
                        </span>
                      </div>
                    </div>

                    {/**divider */}
                    <div className="border-b-2" />
                    <div className="flex  w-full  justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                      <div className="flex py-2 gap-2  items-center justify-center pb-1 -mt-2 text-xs">
                        <p>{kost?.distance} meter dari telkom</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full items-center justify-center pt-11       text-gray-500  text-base ">
          <img width={40} height={40} src={telyuLoading} alt="telyuLoading" />
          <p>Maaf data yang anda maksud belum tersedia </p>
        </div>
      )}
    </>
  );
};

export default CardSameKosan;
