import React from "react";
import { useTranslation } from "react-i18next";

const lngs = [
    { code: "en", native: "English" },
    { code: "in", native: "हिन्दी"},
    { code: "es", native: "Español" },
    { code: "zh", native: "中文"},
    { code: "id", native: "Bahasa"},
    { code: "vi", native: "Tiếng Việt"}
  ];
  
  export default function App() {
    const { t, i18n } = useTranslation();
  
    const handleTrans = (code) => {
      i18n.changeLanguage(code);
    };
  
    return (
      <div className="lang-convet">
        {lngs.map((lng, i) => {
          const { code, native } = lng;
          return<a onClick={() => handleTrans(code)}>{native}</a>;
        })}
  
      </div>
    );
  }