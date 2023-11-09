import bghousehero from "../assets/images/rumahHero.webp";

import { Link } from "react-router-dom";
import kontrakan from "../assets/images/kontrakan.webp";
import kosan from "../assets/images/kosan.webp";
import telyunearby from "../assets/images/telyunearby.webp";
import Button from "../components/Button";

import "../style/style.css";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-10 px-4 md:px-8 lg:px-20 xl:px-9 2xl:px-40">
        {/**hero */}

        <div className="xl:h-[772px] flex relative xl:justify-between items-center px-[80px]  bg-gradient-to-br from-teal-50 to-neutrals7 rounded-3xl">
          <div className="flex w-full md:py-10 xl:justify-between xl:flex-row items-center flex-col-reverse">
            <div className="flex flex-col gap-8 items-center sm:items-baseline  py-5 md:py-0">
              <div className="flex flex-col  justify-center">
                <h1 className="flex md:text-left gap-4 text-[48px] xl:text-[96px] font-bold outer ">
                  <p>Cari</p>
                  <div className=" xl:h-[110px] overflow-hidden inner">
                    <span>
                      Kosan <br />
                      Kontrakan
                    </span>
                  </div>
                </h1>

                <p className="text-center md:text-left text-[24px]">
                  Bersama tekos, dapatkan tempat tinggal impianmu!
                </p>
              </div>
              <Link
                id="navigateToKosanButton1"
                to="/kosan"
                className="w-[247px]"
                aria-label="Navigate To Kosan"
              >
                <Button>Coba cari kosan sekarang</Button>
              </Link>
            </div>
            <img
              width={514}
              height={400}
              className="  w-[200px] md:w-[300px] xl:w-[400px] 2xl:w-[514px] "
              src={bghousehero}
              alt="bghousehero"
            />
          </div>
        </div>

        {/** Layanan 1*/}
        <div className="w-full pt-5 pb-24">
          <div className="flex flex-col  md:flex-col md:gap-12 items-center  ">
            <div>
              <h1 className="text-[48px] text-center font-semibold">
                Kenapa Harus Tekos?
              </h1>
              <p className="text-[#777E91] text-[24px] text-center">
                - Permudah hidupmu -
              </p>
            </div>

            <div className="flex flex-col gap-10 sm:flex-row lg:gap-32 justify-center mt-12 py-3">
              <div className="flex flex-col items-center gap-4">
                <div className="w-[214px] flex flex-col gap-4">
                  <div className="bg-[#8BC5E5] px-4 py-1 w-fit rounded-full text-white">
                    01
                  </div>
                  <h2 className="font-bold text-2xl">Hemat Waktu</h2>
                  <p className="text-[#777E91] text-sm">
                    Kamu tidak perlu survei langsung ke kosan, cukup dengan
                    rebahan dapatkan kosan impianmu
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-[214px] flex flex-col gap-4">
                  <div className="bg-[#92A5EF] px-4 py-1 w-fit rounded-full text-white">
                    02
                  </div>
                  <h2 className="font-bold text-2xl">Hemat tenaga</h2>
                  <p className="text-[#777E91] text-sm">
                    Kamu tidak perlu mengeluarkan tenaga lebih untuk survei
                    langsung kosan, cukup dengan rebahan dapatkan kosan impianmu
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-[214px] flex flex-col gap-4">
                  <div className="bg-[#58C27D] px-4 py-1 w-fit rounded-full text-white">
                    03
                  </div>
                  <h2 className="font-bold text-2xl">Hemat biaya</h2>
                  <p className="text-[#777E91] text-sm">
                    Kamu tidak perlu mengeluarkan biaya transportasi untuk
                    mencari kosan, cukup dengan rebahan dapatkan kosan impianmu
                  </p>
                </div>
              </div>
            </div>

            <Link
              id="navigateToKosanButton2"
              to="/kosan"
              className="w-52"
              aria-label="Navigate To Kosan"
            >
              <Button> Mulai Cari Kosan</Button>
            </Link>
          </div>
        </div>

        {/** Layanan 2*/}
        <div className="w-full pt-5 pb-24">
          <div className="flex flex-col items-center gap-12">
            <div>
              <h1 className="text-[48px] text-center font-semibold">Layanan</h1>
              <p className="text-[#777E91] text-[24px] text-center">
                Layanan yang tersedia di TEKOS saat ini
              </p>
            </div>

            <div className="flex flex-col gap-10 sm:flex-row lg:gap-32 justify-center mt-12 py-3">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-[212px] h-[212px] bg-[#F0B368] rounded-full bg-opacity-25 ">
                  <div className="flex items-center justify-center w-[155px] h-[155px] bg-[#F0B368] rounded-full bg-opacity-50 ">
                    <img src={kosan} width={160} height={104} alt="kosan" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-base">Kosan</h2>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-[212px] h-[212px] bg-[#F0B368] rounded-full bg-opacity-25 ">
                  <div className="flex items-center justify-center w-[155px] h-[155px] bg-[#F0B368] rounded-full bg-opacity-50 ">
                    <img
                      src={kontrakan}
                      width={160}
                      height={104}
                      alt="kontrakan"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="font-semibold text-base">Kontrakan</h2>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-[212px] h-[212px] bg-[#F0B368] rounded-full bg-opacity-25 ">
                  <div className="flex items-center justify-center w-[155px] h-[155px] bg-[#F0B368] rounded-full bg-opacity-50 ">
                    <img
                      src={telyunearby}
                      width={160}
                      height={104}
                      alt="telyunearby"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-base">Telyunearby</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
