import React from "react";
import { useSelector } from "react-redux";

import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos, MdClose } from "react-icons/md";

const CarouselImagesKosan = (props) => {
  const { onClose } = props;
  const { kostById } = useSelector((state) => state.kostById);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % kostById?.data?.image.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + kostById?.data?.image.length) %
        kostById?.data?.image.length
    );
  };
  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closeButton") onClose();
  };
  return (
    <div>
      <div
        onClick={handleOnClose}
        id="container"
        className="z-20 fixed inset-0 bg-neutrals2 bg-opacity-30 flex justify-center items-center
      "
      >
        <div className="flex relative p-4  bg-slate-300 rounded-lg">
          <div
            id="closeButton"
            onClick={handleOnClose}
            className="w-8 h-8 shadow-xl rounded-full flex absolute bg-white -top-4 -right-4 cursor-pointer"
          >
            <MdClose className="m-auto pointer-events-none" />
          </div>
          <img
            className=" max-w-xs lg:max-w-5xl h-[230px] lg:h-[700px] object-fill"
            src={kostById?.data?.image[currentIndex]}
            alt="carouselKosan"
          />

          <div className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4  group focus:outline-none">
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
              data-carousel-prev
              onClick={handlePrev}
              id="prevImageButton"
              aria-label="Toggle Previous Image"
            >
              <MdArrowBackIosNew />
              <span className="sr-only">Previous</span>
            </button>
          </div>
          <div className="absolute  top-0 right-0 z-30 flex items-center justify-center h-full px-4  group focus:outline-none">
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
              data-carousel-next
              onClick={handleNext}
              id="nextImageButton"
              aria-label="Toggle Next Image"
            >
              <MdArrowForwardIos />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselImagesKosan;
