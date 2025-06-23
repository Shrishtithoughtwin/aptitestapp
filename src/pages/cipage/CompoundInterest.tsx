import { useNavigate } from "react-router-dom";

const compoundInterest = () => {
  const navigate = useNavigate();

  
  const handleTakeTestClick = (testId: number) => {
    navigate(`/test-rule-ci/${testId}`);
  };
  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Compound interest online test - Aptitude
      </h2>
      <p className="mb-6 text-gray-500 ">
        Welcome to freeonlinetest online exam portal, here you will get 2000+
        Compound Interest With formulae. As you know Aptitude is one of the
        important topics for competitive exams like Banking, SSC CGL, SSC MTS,
        SSC Group D, Railway Group D, Police Constable Exams, etc. Compound
        Interest is also part of Quantitative Aptitude. Here you will get
        expected questions prepared by experts which could help in your exam in
        the aptitude section.
      </p>
      <h2 className="text-3xl  mb-4">
        Take Compound Interest MCQ & Online Test
      </h2>
      
   {/* Online Tests */}
   {[1, 2].map((testId) => (
        <div
          key={testId}
          className="border border-gray-200 p-1 mb-2 flex justify-between items-center w-4/5 mx-auto"
        >
          <div className="flex-1 text-left ml-2">
            <h2 className="text-lg mb-1">Online Test - {testId} (Compound Interest)</h2>
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

      <div className="bg-blue-400 h-1 my-6"></div>
      <h1 className="text-2xl  font-bold mb-3">Compound Interest: </h1>
      <p className="mb-3 text-gray-500  text-justify">
        We have provided useful formulae and hints for the Compound Interest
        category. Requesting you to refer below points before taking any CI
        test. While calculating compound interest, the simple interest which is
        calculated for the principal of first year will add to the principal
        which we taken already. The addition of this amount will be the
        principle for the next year. For this amount simple is calculated for
        second year and added to principal for second year. It will go on
        increase like this. Finally principal is subtracted from last year
        amount. The result of this subtraction gives compound interest. It is
        denoted by CI.
      </p>
    </div>
  );
};
export default compoundInterest;
