import React from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import telyuLoading from "../../../assets/images/telyuLoading.webp";
import { removeSpace } from "../../../helpers/helpers";
import Loader from "../../Loader";
const CardNearby1 = () => {
  const { nearby, nearbyLoading } = useSelector((state) => state.nearby);
  return (
    <>
      {nearbyLoading || !nearby ? (
        <div className="flex  pt-4 sm:pt-0 sm:h-[600px] gap-4 w-full  justify-center px-12 sm:px-32    text-gray-500 font-bold text-sm sm:text-2xl ">
          <Loader />
          <p>Loading...</p>
        </div>
      ) : nearby?.data?.length > 0 ? (
        <div className="px-5 md:px-0 py-6 w-full  grid  gap-4 grid-cols-2 md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:gap-2 xl:grid-cols-3  min-[1770px]:grid-cols-4  xl:gap-4   2xl:gap-x-8   h-fit max-h-[2000px] place-items-center ">
          {nearby?.data?.map((nearby) => {
            return (
              <div
                key={nearby._id}
                className="flex flex-col border relative rounded-3xl sm:h-[380px] w-full lg:h-[400px]  md:w-[250px]   xl:w-[300px]  bg-white  "
              >
                <Link
                  id={`detailNearby${removeSpace(nearby?.name)}`}
                  to={`/productDetailNearby/${nearby._id}`}
                >
                  <div className="group ">
                    <div className="group relative h-[120px]  md:h-[200px]">
                      <img
                        className=" flex flex-none order-[0px] h-full  w-full  rounded-t-3xl"
                        src={nearby.image}
                        alt="nearbyCard"
                      />

                      {/**Hover */}
                      <div className="absolute w-full  h-full sm:h-[165px] md:h-[200px] bg-neutrals2/50 rounded-t-3xl flex items-center justify-center  -top-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="bg-blue-600 text-white rounded-full px-[14.5px]  py-3  text-xs">
                          Lihat detail
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 md:px-6 h-full  font-poppins  ">
                    <div className="flex flex-col py-1 md:py-3 gap-2 md:gap-5 ">
                      <div className="flex flex-row  gap-2   pt-[14px]">
                        <span className="text-sm w-[125px] sm:w-fit  sm:text-base font-light sm:font-medium truncate overflow-hidden whitespace-nowrap hover:whitespace-normal ">
                          {nearby.name}
                        </span>
                      </div>
                      <span
                        id="priceNearby"
                        className="gap-[6px] w-[125px] sm:w-fit overflow-hidden whitespace-nowrap hover:whitespace-normal  text-primary4  font-bold  rounded-md sm:px-0 py-1  sm:py-3 items-center justify-center text-xs  truncate"
                      >
                        <NumericFormat
                          displayType="text"
                          prefix="RP."
                          value={nearby.price}
                          className="text-primary4 text-xs font-bold "
                          thousandSeparator="."
                          decimalSeparator=" "
                        />
                      </span>
                    </div>

                    {/**divider */}
                    <div className="border-b-2 py-1 md:py-2" />
                    {/**jarak ke telkom */}
                    <div className="flex  w-full  justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                      <div className="flex py-2 gap-2  items-center justify-center pb-1 -mt-2 text-xs">
                        <p>{nearby.distance} meter dari telkom</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col pt-4 gap-4 w-full items-center justify-center px-12 sm:px-32    text-gray-500 font-bold text-sm sm:text-2xl ">
          <img width={168} height={168} src={telyuLoading} alt="telyuLoading" />
          <p>Maaf data yang anda maksud belum tersedia </p>
        </div>
      )}
    </>
  );
};

export default CardNearby1;
