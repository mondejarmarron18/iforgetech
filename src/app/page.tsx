"use client";

import LanguageDropDown from "@/components/LanguageDropDown";
import Logo from "@/components/icons/Logo";
import { FaGithub, FaHammer, FaLinkedin } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Typewriter from "typewriter-effect";
import "../libs/i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const handleOnCopy = () => {
    navigator.clipboard.writeText("dev@iforgetech.com");

    toast("Email copied", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
      style: {
        background: "rgba(0, 0, 0, 0.3)",
      },
      transition: Bounce,
    });
  };

  return (
    <main className="h-full flex flex-col items-center justify-between p-3 md:p-5">
      <div className="flex justify-between w-full">
        <div className="flex gap-1 font-semibold items-center italic">
          <Logo width={30} height={30} fill="white" /> iForgeTech
        </div>
        <LanguageDropDown />
      </div>
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
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex gap-3 justify-center">
          <a href="https://github.com/mondejarmarron18" title="Go to GitHub">
            <FaGithub size={26} className="hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/marvin-ronquillo-06566a202"
            title="Go to LinkedIn"
          >
            <FaLinkedin size={26} className="hover:text-white" />
          </a>
        </div>
        <p className="text-center">
          {t("contactMe")}{" "}
          <span
            className="text-center font-medium cursor-copy hover:text-white"
            onClick={handleOnCopy}
            title="Copy email"
          >
            dev@iforgetech.com
          </span>
        </p>
        <ToastContainer />
      </div>
    </main>
  );
}
