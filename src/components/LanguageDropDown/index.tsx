import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { MdArrowDropDown } from "react-icons/md";

const languages = [
  {
    name: "Japanese",
    code: "ja",
    flag: "JP",
  },
  {
    name: "English",
    code: "en-US",
    flag: "US",
  },
  {
    name: "Filipino",
    code: "fi",
    flag: "PH",
  },
];

const LanguageDropDown = () => {
  const [language, setLanguage] = useState<
    (typeof languages)[number] | undefined
  >(undefined);
  const { i18n } = useTranslation();

  useEffect(() => {
    const l = languages.find(
      (l) => l.code === localStorage.getItem("i18nextLng")
    );

    setLanguage(l);
  }, [i18n.language]);

  const handleOnChangeLanguage = (index: number) => {
    i18n.changeLanguage(languages[index].code);
  };

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
