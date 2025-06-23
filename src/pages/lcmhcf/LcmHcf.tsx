import { useNavigate } from "react-router-dom";

const LcmHcf = () => {
  const navigate = useNavigate();

 
  const handleTakeTestClick = (testId: number) => {
    navigate(`/test-rule-lh/${testId}`);
  };
  return (
  
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Lcm and Hcf online test - Aptitude
        </h2>
        <p className="mb-6 text-gray-500 ">
          LCM and HCF online test, Mock test on LCM and HCF. Here free online
          test provides best questions and answers of LCM and HCF for all
          competitive exams like banking sector(ibps po, sbi, RBI, sbi clerk,),
          SSC (staff selection commissions) SSC CGL, SSC CHSL, SSC CPO, SSC MTS.
          Railway Board, group D exams. placement for IT company. Questions are
          prepared by Best faculty with easy understanding. All the set are
          quite unique questions and with solutions and answers keys. You can
          get all the tricks and tips in LCM and HCF.
        </p>
        <h2 className="text-3xl  mb-4">
        Take LCM and HCF MCQ & Online Test
      </h2>

       {/* Online Tests */}
   {[1, 2].map((testId) => (
        <div
          key={testId}
          className="border border-gray-200 p-1 mb-2 flex justify-between items-center w-4/5 mx-auto"
        >
          <div className="flex-1 text-left ml-2">
            <h2 className="text-lg mb-1">Online Test - {testId} (LCM and HCF)</h2>
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
        <h1 className="text-2xl  font-bold mb-3">LCM and HCF Online Mock test </h1>
        <p className="mb-3 text-gray-500  text-justify">
          
            Test your skills by writing those exams test your knowledge of the
            result. In the market there are also plenty of books available for
            efficiency. But instead of buying a book and we offer a lot of
            questions in the test papers at free of cost. Take this one as an
            opportunity and try to get a great benefit. If you want to report
            anything please post in the forum for debate and doubt to get your
            clarification.
          
        
        </p>
      </div>
  
  );
};
export default LcmHcf;
