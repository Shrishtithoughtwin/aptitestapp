import React from "react";
import { Link } from "react-router-dom"; 
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
   <>
      <div className="text-center">
        <h1 className="text-4xl font-size-36px ">
        {t("home.title")}
        </h1>
        <p className=" text-2xl mt-4">{t("home.subtitle")}</p>
      </div>

      <div className="container mx-auto mt-8">
  <div className="flex justify-center">
    <div className="card border border-gray-400 shadow-xl w-full max-w-md">
      <div className="card-body text-center ">
        
      <div className="bg-blue-500 text-white py-3 px-4 border-b border-gray-400">
  <h2 className="card-title text-2xl">{t("home.aptitudeTitle")}</h2>
</div>
        <ul className="list-none  ">
          <li className="text-lg border border-gray-300  px-4 py-2 hover:text-blue-400 cursor-pointer">
            <Link to="/simpleinterest">{t("home.topics.simpleInterest")}</Link>
          </li>
          <li className="text-lg border border-gray-300  px-4 py-2 hover:text-blue-400 cursor-pointer">
            <Link to="/compoundinterest">{t("home.topics.compoundInterest")}</Link>
          </li>
          <li className="text-lg border border-gray-300 px-4 py-2 hover:text-blue-400 cursor-pointer">
          <Link to="/average">{t("home.topics.average")}</Link>
          </li>
          <li className="text-lg border border-gray-300 px-4 py-2 hover:text-blue-400 cursor-pointer">
            <Link to="/aptitude">{t("home.topics.learnMore")}</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
      <div className="bg-blue-400 h-1 my-6"></div>
      <p className="mb-3 text-gray-500  text-justify">
      {t("home.description")}
        <br/>
        <br/>
        {t("home.whyFree")}
        </p>
      </>
  );
};
export default Home;