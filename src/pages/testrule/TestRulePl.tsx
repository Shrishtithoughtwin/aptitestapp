import { useNavigate, useParams } from "react-router-dom";

const TestRulePl = () => {
  const navigate = useNavigate();
  const { testId } = useParams<{ testId: string }>();

  const handleStartTestClick = () => {
    navigate(`/profit-loss-test/${testId}`);
  };
  return (
    <div className="container mx-auto p-6 text-center shadow-lg rounded-lg bg-base-100 border border-gray-200">
      <h1 className="text-3xl font-bold mb-4">
      Profit and loss, aptitude questions & answers, profit and loss test
      </h1>
      <ul className="text-left text-lg mb-6 space-y-2">
        <h1 className="text-2xl font-bold mb-4">Test Instructions :</h1>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">Total number of questions:</span> 20
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">Each question carries:</span> 1 mark
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">Negative marks per question:</span>{" "}
            0.25
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">Skipping questions:</span> No marks
            will be deducted
          </span>
        </li>

        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">Time allotted:</span> 30 minutes
          </span>
        </li>
      </ul>
      <button
        className="flex items-start bg-blue-500 text-white px-5 py-2 rounded-3xl mr-2 hover:bg-blue-600 "
        onClick={handleStartTestClick}
      >
        Start Test
      </button>
    </div>
  );
};

export default TestRulePl;