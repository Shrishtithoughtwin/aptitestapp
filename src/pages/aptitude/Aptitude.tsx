import { Link } from "react-router-dom"; 
import apti from "../../assets/images/apti.jpg";
import { useTranslation } from "react-i18next";
const Aptitude: React.FC = () => {
  const { t } = useTranslation();
  const topics = [
    { key: "lcmhcf", path: "/lcmhcf" },
    { key: "average", path: "/average" },
    { key: "profitloss", path: "/profitloss" },
    { key: "simpleinterest", path: "/simpleinterest" },
    { key: "compoundinterest", path: "/compoundinterest" },
  ];
  return (
<>      <div className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
        {t("aptitude.title")}
        </h2>
        <p className="mb-6 text-gray-500 ">
        {t("aptitude.description")}
        </p>
        <img className=" place-self-center" src={apti}/>

        <ul className="grid grid-cols-2 gap-4 my-6">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="text-lg border  border-blue-400 px-2 py-2 hover:text-blue-400  cursor-pointer transition-all"
            style={{
              borderLeftWidth: "10px", 
            }}
          >
            <Link to={topic.path}>{t(`aptitude.topics.${topic.key}`)}</Link>
          </li>
        ))}
      </ul>
        <div className="bg-blue-400 h-1 my-6"></div>
        <h1 className="text-2xl  font-bold mb-3">{t("aptitude.mockTestTitle")}</h1>
        <p className="mb-3 text-gray-500  text-justify">
        {t("aptitude.mockTestDescription")} 
        </p>
      </div>
      </>
  );
};
export default Aptitude;
