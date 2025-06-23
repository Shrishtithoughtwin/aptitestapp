import si from "../../assets/images/si.png";
import { useNavigate } from "react-router-dom";
const SimpleInterest = () => {
  const navigate = useNavigate();


  const handleTakeTestClick = (testId: number) => {
    navigate(`/test-rule-si/${testId}`);
  };
  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Simple interest online test - Aptitude
      </h2>
      <p className="mb-6 text-gray-500 ">
        Welcome to freeonlinetest online exam portal, here you will get 2000+
        Simple Interest With formulae. As you know Aptitude is one of the
        important topics for competitive exams like Banking, SSC CGL, SSC MTS,
        SSC Group D, Railway Group D, Police Constable Exams, etc. Simple
        Interest is also part of it. Here you will get expected questions
        prepared by experts which could help in your exam in the aptitude
        section.
      </p>

 
      <h2 className="text-3xl  mb-4">
        Take Simple Interest MCQ & Online Test
      </h2>

             {/* Online Tests */}
             {[1, 2].map((testId) => (
        <div
          key={testId}
          className="border border-gray-200 p-1 mb-2 flex justify-between items-center w-4/5 mx-auto"
        >
          <div className="flex-1 text-left ml-2">
            <h2 className="text-lg mb-1">Online Test - {testId} (Simple Interest )</h2>
            <p className="text-gray-500 mb-1 text-base">
              Number of questions: 20 | Time: 30 minutes
            </p>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-3xl mr-2 hover:bg-blue-600"
            onClick={() => handleTakeTestClick(testId)}
          >
            TAKE TEST
          </button>
        </div>
      ))}
      <img className=" place-self-center" src={si} />
    </div>
  );
};
export default SimpleInterest;
