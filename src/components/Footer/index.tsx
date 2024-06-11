"use client";

import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Footer = () => {
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
        <Suspense>{t("contactMe")}</Suspense>{" "}
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
  );
};

export default Footer;
