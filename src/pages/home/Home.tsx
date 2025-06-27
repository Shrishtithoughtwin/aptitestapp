
import React from "react";
import { Link } from "react-router-dom"; 
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  const topics = [
    { path: "/simpleinterest", label: t("home.topics.simpleInterest") },
    { path: "/compoundinterest", label: t("home.topics.compoundInterest") },
    { path: "/average", label: t("home.topics.average") },
    { path: "/aptitude", label: t("home.topics.learnMore") }
  ];

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-size-36px ">{t("home.title")}</h1>
        <p className=" text-2xl mt-4">{t("home.subtitle")}</p>
      </div>

      <div className="container mx-auto mt-8">
        <div className="flex justify-center">
          <div className="card border border-gray-400 shadow-xl w-full max-w-md">
            <div className="card-body text-center ">
              <div className="bg-blue-500 text-white py-3 px-4 border-b border-gray-400">
                <h2 className="card-title text-2xl">{t("home.aptitudeTitle")}</h2>
              </div>

              <ul className="list-none">
                {topics.map((topic, index) => (
                  <li
                    key={index}
                    className="text-lg border border-gray-300 px-4 py-2 hover:text-blue-400 cursor-pointer"
                  >
                    <Link to={topic.path}>{topic.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-400 h-1 my-6"></div>

      <p className="mb-3 text-gray-500 text-justify">
        {t("home.description")}
        <br />
        {t("home.whyFree")}
      </p>
    </>
  );
};

export default Home;
