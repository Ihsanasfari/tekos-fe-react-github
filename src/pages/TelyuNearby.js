import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import bgherotelyu from "../assets/images/bgherotelyu.webp";

import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { TbLocation } from "react-icons/tb";
import CardNearby1 from "../components/Card/CardNearby/CardNearby1";
import { getAllNearby } from "../redux/actions/nearby/nearbyAction";
const TelyuNearby = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNearby());
  }, [dispatch]);

  const scrollToTargetSection = () => {
    const targetElement = document.getElementById("searchNearbyInput");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleOnFilter = (e) => {
    const filterSlug = [
      {
        param: "keyword",
        value: e?.search?.length > 0 && e?.search
      }
    ].filter((data) => data.value !== false);

    let slug = "";
    filterSlug?.map((data) => {
      slug = slug + data.param + "=" + data.value + "&";
    });

    dispatch(getAllNearby(slug));
    scrollToTargetSection();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleOnFilter)}>
        <div className="px-3 lg:px-9 2xl:px-40">
          {/**hero */}
          <div className="pb-[50px] md:pb-[136px]  ">
            <div
              style={{
                backgroundImage: ` url(${bgherotelyu})`,
                backgroundSize: "cover"
              }}
              className="flex relative justify-between items-center p-10 md:p-[77px] pb-[140px] md:pb-[100px] 2xl:pb-[280px] rounded-3xl "
            >
              <div className="flex flex-col gap-4 my-16 text-gray-200 md:h-[260px] justify-center">
                <h1 className="flex flex-col text-3xl gap-2 md:flex-col md:text-[96px] font-extrabold md:font-semibold md:leading-[96px] ">
                  Telyu Nearby <br />
                </h1>
                <p className="text-xs md:text-2xl">
                  Dapatkan kebutuhanmu disini!
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
                        placeholder="Cari kebutuhanmu disini"
                        name="keyword"
                        {...register("search")}
                        id="searchNearbyInput"
                      />
                      <div className="py-3 ">
                        <button
                          id="submitFormButton"
                          type="submit"
                          className="flex bg-[#3B71FE] w-12 h-12   md:w-16 md:h-16 items-center justify-center rounded-full p-4 cursor-pointer"
                          aria-label="Search Telyu Nearby Button"
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

          {/** Card Contact Info */}
          <div className="h-fit">
            <CardNearby1 />
          </div>
        </div>
      </form>
    </>
  );
};
export default TelyuNearby;
