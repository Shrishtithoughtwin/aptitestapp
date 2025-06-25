import { useTranslation } from "react-i18next";
import si from "../../assets/images/si.png";
import { useNavigate } from "react-router-dom";

const SimpleInterest = () => {
  const navigate = useNavigate();
const {t}=useTranslation();

  const handleTakeTestClick = (testId: number) => {
    navigate(`/test-rule-si/${testId}`);
  };
  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-4xl font-bold mb-4">
      {t("simpleInterest.title")}
      </h2>
      <p className="mb-6 text-gray-500 ">
      {t("simpleInterest.description")}
      </p>

 
      <h2 className="text-3xl  mb-4">
      {t("simpleInterest.testHeading")}
      </h2>

             {/* Online Tests */}
             {[1, 2].map((testId) => (
        <div
          key={testId}
          className="border border-gray-200 p-1 mb-2 flex justify-between items-center w-2/3 mx-auto"
        >
          <div className="flex-1 text-left ml-2">
            <h2 className="text-lg mb-1"> {t("simpleInterest.onlineTest")} - {testId} ({t("simpleInterest.topic")})</h2>
            <p className="text-gray-500 mb-1 text-base">
            {t("simpleInterest.onlineTestDescription")}
            </p>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-3xl mr-2 hover:bg-blue-600"
            onClick={() => handleTakeTestClick(testId)}
          >
              {t("simpleInterest.takeTestButton")}
          </button>
        </div>
      ))}
      <img className=" place-self-center" src={si} />
    </div>
  );
};
export default SimpleInterest;
