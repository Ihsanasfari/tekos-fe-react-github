import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-teal-50 to-white w-full h-[500px] sm:h-[776px] font-sans">
      <p className="text-4xl sm:text-8xl font-bold">404</p>
      <p className="text-2xl sm:text-4xl font-bold">Halaman Tidak Ditemukan</p>
      <p className="text-xs sm:text-base font-normal">
        Maaf, halaman yang Anda cari tidak ada atau terjadi kesalahan lain.
      </p>
    </div>
  );
};

export default NotFound;
