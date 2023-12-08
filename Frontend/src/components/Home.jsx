import React, { useState } from "react";
import Satisfaction from "./Satisfaction";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from "./../locales/en/translation.json";
import tAR from "./../locales/AR/translation.json";
import { Link } from "react-router-dom";

i18n
  .use(initReactI18next)
  // .use(LanguageDetector) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: tEn,
      },
      AR: {
        translation: tAR,
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const Home = () => {
  const { t } = useTranslation();
  const [suggestion, setSuggestion] = useState("");
  const [weaknesses, setWeaknesses] = useState("");
  return (
    <div className="flex justify-between gap-4 w-full flex-col  xs:mb-24 md:mb-0">
      {/* welcome */}
      <div className="flex flex-row gap-0 w-full relative pb-4">
        {/* sidebar */}
        <div className="bg-[#32a8a4] w-9 mr-8 -mb-11"></div>

        <div className="flex flex-row w-full relative">
          {/* language */}
          <div className="flex flex-col gap-12 w-1/2 mt-8">
            <div className="flex flex-row gap-2 w-full  ">
              <h1 className="text-black font-bold text-2xl">{t("lang")}</h1>
              <button
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
                className="border-[3.5px]  text-xl px-2 hover:bg-[#32a8a4] hover:scale-105  border-[#32a8a4] h-11 rounded-2xl w-20 flex items-center justify-center"
              >
                Eng
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("AR");
                }}
                className="border-[3.5px] text-xl px-2 hover:bg-[#32a8a4] hover:scale-105 border-[#32a8a4] h-11 rounded-2xl w-20 flex items-center justify-center"
              >
                عربي
              </button>
              <a
                href="/form"
                className="border-[3.5px] text-xl px-2 hover:bg-[#32a8a4] hover:scale-105 border-[#32a8a4] h-11 rounded-2xl w-20 flex items-center justify-center"
              >
                Form
              </a>
            </div>
            <div className=" ">
              <div>
                <img
                  src="./assets/pic2.png"
                  alt="welcome "
                  className="w-[80%] md:h-[280px]     rounded-2xl mt-40"
                />
              </div>
            </div>
          </div>
          {/* seeting */}
          <div className="flex flex-col mt-10 w-1/2">
            <div
              className={` ${
                i18n.language === "AR" ? "mb-24" : ""
              } mb-16 flex flex-row`}
            >
              {" "}
              <p className="font-bold sm:text-lg md:text-4xl mt-20 absolute right-[23%]">
                {t("welcome")}
                <span className="absolute right-[3%] ">
                  <br className="absolute right-[3%] " />
                  {t("satis")}
                </span>
                <img
                  src="./assets/viv.png"
                  alt="welcome "
                  className={`w-[20%] h-[80px] ${
                    i18n.language === "AR" ? "mt-2 " : ""
                  }     rounded-2xl`}
                />
              </p>
            </div>
            <div
              className={`  ${
                i18n.language === "AR" ? "mb-10" : ""
              } relative overflow-x-hidden overflow-y-hidden mr-0`}
            >
              <div
                className={`bg-[#95bcbf] rounded-full w-[390px] h-[390px] ${
                  i18n.language === "AR"
                    ? " h-[315px] w-[315px] top-6 md:-right-28"
                    : ""
                } absolute md:-right-44 sm:-right-0 bottom-0 -z-30 `}
              ></div>
              <p
                className={`md:text-2xl md:font-medium sm:text-xs sm:font-normal tracking-wide sm:leading-5 md:leading-[55px] ${
                  i18n.language === "AR" ? "md:leading-[55px]" : ""
                }} mt-36 z-50	`}
              >
                {t("desc")}.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* circle */}
      <div className="flex flex-col justify-center items-center relative    ">
        <div className="w-32 bg-[#f26185] h-[1px] flex items-center justify-center absolute top-12"></div>
        <div className="rounded-full bg-[#f57897] w-32 h-32  -top-4  absolute -z-30"></div>
        <div className="border-2 border-black rounded-full w-32 h-32 z-30 absolute -top-4 right-[575px]"></div>
      </div>
      <div className="flex flex-row w-full mt-10  ">
        {/* inputs */}

        <div className="flex flex-col w-full pl-8 mt-16">
          {/* input 1 */}
          <div className="flex flex-col mr-3 ">
            <p className="text-black font-semibold text-lg">
              {i18n.language === "AR" ? (
                <div className="flex flex-row">
                  <p> ما مدى رضاك عن خدماتنا؟</p>
                  <p>.1</p>
                </div>
              ) : (
                <>
                  {t("one")} {t("satisfied")}
                </>
              )}
            </p>
            <div className=" flex flex-row gap-2 mt-2 items-center justify-around h-fit   w-[100%]">
              <Satisfaction pic="./assets/sat very.png" title={t("t9")} />
              <Satisfaction
                pic="./assets/sat.png"
                title={i18n.language === "AR" ? " راضٍ " : "Satisfied"}
              />
              <Satisfaction pic="./assets/dis.png" title={t("t2")} />
              <Satisfaction pic="./assets/very disat.png" title={t("t3")} />
            </div>
          </div>
          {/* input 2 */}

          <div className="flex flex-col">
            <p className="text-black font-semibold text-lg">
              {i18n.language === "AR" ? (
                <div className="flex flex-row">
                  <p> ما هي الخدمات التي تستخدمها ؟ </p>
                  <p>.2</p>
                </div>
              ) : (
                <>{t("which")}</>
              )}
            </p>{" "}
            <div className="flex flex-row justify-around gap-2 mt-2 items-center w-[70%]">
              <Satisfaction pic="./assets/crm.png" title={t("t4")} />
              <Satisfaction pic="./assets/call.png" title={t("t5")} />
              <Satisfaction pic="./assets/chat.png" title={t("t6")} />
            </div>
          </div>
          {/* input 3 */}

          <div className="flex flex-col">
            {" "}
            <p className="text-black font-semibold text-lg">
              {i18n.language === "AR" ? (
                <div className="flex flex-row">
                  <p>هل تواجه أي صعوبات في استخدام خدماتنا؟</p>
                  <p>.3</p>
                </div>
              ) : (
                <>{t("diffic")}</>
              )}
            </p>
            <div className="flex flex-row justify-around gap-2 mt-2 items-center w-[40%]">
              <Satisfaction pic="./assets/yes.png" title={t("t7")} />
              <Satisfaction pic="./assets/no.png" title={t("t8")} />
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full ">
          <img
            src="./assets/pic1.png"
            alt="welcome "
            className="w-[90%]  md:h-[280px]    rounded-2xl mt-40"
          />
        </div>
        {/* sidebar */}
        <div className="bg-[#32a8a4] w-20 ml-8 -mb-11"></div>
      </div>

      {/* circle */}
      <div className="flex flex-col justify-center items-center relative     ">
        <div className="w-32 bg-[#f26185] h-[1px] flex items-center justify-center absolute top-12"></div>
        <div className="rounded-full bg-[#f57897] w-32 h-32  -top-4  absolute -z-30"></div>
        <div className="border-2 border-black rounded-full w-32 h-32 z-30 absolute -top-4 right-[575px]"></div>
      </div>
      {/* suggestion */}
      <div className="flex flex-row w-full gap-3">
        <div className="w-full ml-8 sm:flex md:hidden">
          <img
            src="./assets/pic3.png"
            alt="welcome "
            className="w-[85%] h-[280px]    rounded-2xl mt-40"
          />
        </div>
        {/* sidebar */}
        <div className="bg-[#32a8a4] w-20  -mb-11"></div>
        {/* image */}
        <div className="w-full ml-8 sm:hidden md:flex">
          <img
            src="./assets/pic3.png"
            alt="welcome "
            className="w-[85%] h-[280px]    rounded-2xl mt-40"
          />
        </div>
        {/* suggestion */}
        <div className="flex flex-col mr-20 w-full mt-28  ">
          <p className="text-black font-semibold text-lg mb-7">
            {i18n.language === "AR" ? (
              <div className="flex flex-row">
                <p> ما هي الاقتراحات التي لديك لتحسين خدماتنا؟ </p>
                <p>.4</p>
              </div>
            ) : (
              <>{t("suggest")}</>
            )}
          </p>
          <input
            type="text"
            value={suggestion}
            onChange={(e) => {
              setSuggestion(e.target.value);
            }}
            className="border-4 border-[#32a8a4] py-12 px-8 rounded-3xl text-[#32a8a4] "
          />
          <p className="text-black font-semibold text-lg mb-7">
            {i18n.language === "AR" ? (
              <div className="flex flex-row">
                <p> ما هي نقاط الضعف التي تلاحظها في خدماتنا؟ </p>
                <p>.5</p>
              </div>
            ) : (
              <>{t("weak")}</>
            )}
          </p>{" "}
          <input
            type="text"
            value={weaknesses}
            onChange={(e) => {
              setWeaknesses(e.target.value);
            }}
            className="border-4 border-[#32a8a4] py-12 px-8 rounded-3xl text-[#32a8a4] "
          />
          <button className="text-black border-2 w-1/2 mt-5 py-4  md:px-0 text-lg font-bold  border-black bg-[#32a8a4]  flex justify-center items-center rounded-full">
            {t("submit")}
          </button>
        </div>
      </div>

      <div className="last md:hidden">
        <img
          src="./assets/pic3.png"
          alt="welcome "
          className="w-[85%] h-[280px]    rounded-2xl "
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-black border-[8px] sm:w-full md:w-[80%] py-16  sm:text-3xl md:text-4xl mt-28 mb-8 font-bold border-[#32a8a4]  flex justify-center items-center rounded-[60px] mx-7">
          {t("success")}{" "}
        </p>
      </div>
      <div className="flex items-center justify-center mb-6">
        <p className="font-normal text-4xl">
          <span className="text-pink-500 font-medium">
            {t("thank")} {""}
          </span>
          {t("atten")}
        </p>
      </div>

      <div className="flex items-center flex-col justify-center  ">
        <div className="w-4 h-4 rounded-full border-4 border-[#32a8a4]"></div>
        <div className="w-1 h-56  bg-[#32a8a4]"></div>
        <div className="w-full bg-[#0f080a] h-16 mt-0 "></div>
      </div>
    </div>
  );
};

export default Home;
