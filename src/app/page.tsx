"use client";

import LanguageDropDown from "@/components/LanguageDropDown";
import Logo from "@/components/icons/Logo";
import { FaHammer } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import "@/libs/i18n";
import Translate from "@/components/Translate";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="h-full flex flex-col items-center justify-between p-3 md:p-5">
      <div className="flex justify-between w-full">
        <div className="flex gap-1 font-semibold items-center italic">
          <Logo width={30} height={30} fill="white" /> iForgeTech
        </div>
        <LanguageDropDown />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex relative flex-col size-[200px] animate-pulse items-center justify-center gap-4">
          <div className="h-full w-full absolute border-gray-800 drop-shadow-xl border-t-2 rounded-full animate-spin"></div>
          <span className="scale-x-[-1]">
            <FaHammer className="duration-1000 origin-left animate-hammering size-[40px]" />
          </span>
          <span className="text-md font-semibold text-center">
            <Typewriter
              options={{
                strings: [t("comingSoon")],
                autoStart: true,
                loop: true,
                delay: "natural",
                deleteSpeed: "natural",
              }}
            />
          </span>
        </div>
        <div className="text-center px-4">
          <p className="text-lg mb-5">{t("underConstruction")}</p>
          <a href="https://portfolio.iforgetech.com">
            <button className="font-medium text-white bg-slate-700 hover:bg-slate-600 rounded px-6 py-4">
              {t("visitPreview")}
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
