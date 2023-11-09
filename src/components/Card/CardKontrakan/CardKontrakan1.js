import React from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import telyuLoading from "../../../assets/images/telyuLoading.webp";
import { removeSpace } from "../../../helpers/helpers";
import { getAllKontrakan } from "../../../redux/actions/kontrakan/kontrakanAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../../Loader";
const CardKontrakan1 = () => {
  const { kontrakan, kontrakanLoading } = useSelector(
    (state) => state.kontrakan
  );

  const filteredKontrakan = kontrakan?.data?.filter(
    (item) => item.status === "Terverifikasi"
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllKontrakan());
  }, [dispatch]);
  return (
    <>
      {kontrakanLoading || !filteredKontrakan ? (
        <div className="flex  pt-4 sm:pt-[234px] gap-4 w-full items-center justify-center px-12 sm:px-32    text-gray-500 font-bold text-sm sm:text-2xl ">
          <Loader />
          <p>Loading...</p>
        </div>
      ) : filteredKontrakan.length > 0 ? (
        <div className="px-5 md:px-0 py-6 w-full  grid  gap-4 grid-cols-2 md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:gap-2 xl:grid-cols-3  min-[1770px]:grid-cols-4  xl:gap-4   2xl:gap-x-8   h-fit max-h-[2000px]  overflow-x-hidden place-items-center">
          {filteredKontrakan?.map((kontrakan) => {
            return (
              <div
                key={kontrakan?._id}
                className="flex flex-col border relative rounded-3xl  sm:h-[386px] md:w-[250px]   xl:w-[300px]  bg-white "
              >
                <Link
                  id={`detailKontrakan${removeSpace(kontrakan?.name)}`}
                  to={`/productDetailKontrakan/${kontrakan?._id}`}
                >
                  <div className="group">
                    <div className="group relative h-[130px] sm:h-[165px] md:h-[200px]">
                      <img
                        className=" flex flex-none order-[0px] h-full sm:h-[165px] md:h-[200px] w-full  rounded-t-3xl"
                        src={kontrakan?.image[0]}
                        alt="image0"
                      />

                      {/**Kost type*/}
                      <div
                        className=" px-1 py-1 sm:px-4 sm:py-2  shadow-xl rounded-md flex absolute bg-gray-100  left-4 top-4 cursor-pointer "
                        id={`kontrakanType${kontrakan?.type}`}
                      >
                        <p className=" text-xs font-bold font-poppins uppercase  ">
                          {kontrakan?.type}
                        </p>
                      </div>
                      {/**Hover */}
                      <div className="absolute w-full  h-full sm:h-[165px] md:h-[200px] bg-neutrals2/50 rounded-t-3xl flex items-center justify-center  -top-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div
                          className="group px-1 py-1 sm:px-4 sm:py-2 shadow-xl rounded-md flex absolute left-4 top-4 cursor-pointer group-hover:bg-gray-100  "
                          id={`kontrakanType${kontrakan?.type}`}
                        >
                          <p className="text-xs font-bold font-poppins uppercase ">
                            {kontrakan?.type}
                          </p>
                        </div>
                        <p className="bg-blue-600 text-white rounded-full px-[14.5px]  py-2 sm:py-3 text-xs">
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
                            kontrakan?.available === true
                              ? "text-primary4"
                              : "text-red-500"
                          }
                          `}
                      >
                        {kontrakan?.available === true ? (
                          <p>TERSEDIA</p>
                        ) : (
                          <p>TIDAK TERSEDIA</p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col py-1 sm:py-5 gap-2 justify-between ">
                      <div className="flex flex-col sm:flex-row sm:gap-2 ">
                        <span className="text-sm w-[125px] sm:w-fit  sm:text-base font-light sm:font-medium truncate overflow-hidden whitespace-nowrap hover:whitespace-normal ">
                          {kontrakan?.name}
                        </span>
                      </div>
                      <span
                        id="priceKontrakan"
                        className="gap-[6px] w-[125px] sm:w-fit overflow-hidden whitespace-nowrap hover:whitespace-normal  text-primary4  font-bold  rounded-md sm:px-0 py-1  sm:py-3 items-center justify-center text-xs  truncate"
                      >
                        <NumericFormat
                          displayType="text"
                          prefix="RP."
                          value={kontrakan?.price}
                          className="truncate"
                          thousandSeparator="."
                          decimalSeparator=" "
                        />
                      </span>
                    </div>

                    {/**divider */}
                    <div className="border-b-2" />
                    <div className="flex  w-full  justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                      <div className="flex py-2 gap-2 items-center justify-center pb-1 -mt-2 text-xs">
                        <p>{kontrakan?.distance} meter dari telkom</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col pt-4 sm:pt-[234px] gap-4 w-full items-center justify-center px-12 sm:px-32    text-gray-500 font-bold text-sm sm:text-2xl ">
          <img width={168} height={168} src={telyuLoading} alt="telyuLoading" />
          <p>Maaf data yang anda maksud belum tersedia </p>
        </div>
      )}
    </>
  );
};

export default CardKontrakan1;
