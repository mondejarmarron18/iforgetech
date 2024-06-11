"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLayoutEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { MdArrowDropDown } from "react-icons/md";

const languages = [
  {
    name: "English",
    code: "en-US",
    flag: "US",
  },
  {
    name: "Japanese",
    code: "ja",
    flag: "JP",
  },
  {
    name: "Filipino",
    code: "fi",
    flag: "PH",
  },
];

const LanguageDropDown = () => {
  const [language, setLanguage] = useState<(typeof languages)[number]>();
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    const lang = languages.find((lang) => lang.code === i18n.language);

    setLanguage(lang);
  }, [i18n.language]);

  const handleOnChangeLanguage = (index: number) => {
    i18n.changeLanguage(languages[index].code);
  };

  if (!language) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
        {!!language?.flag && <ReactCountryFlag countryCode={language.flag} />}
        <span className="text-gray-400 flex text-sm">
          {language?.name} ({language?.flag}) <MdArrowDropDown size={20} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none bg-gray-800 mr-5 rounded">
        {languages.map((language, index) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleOnChangeLanguage(index)}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropDown;
