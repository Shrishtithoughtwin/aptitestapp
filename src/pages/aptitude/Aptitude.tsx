import { Link } from "react-router-dom"; 
// import { Check } from "lucide-react";
import apti from "../../assets/images/apti.jpg";
const Aptitude: React.FC = () => {
  const topics = [
    { name: "LCM and HCF", path: "/lcmhcf" },
    { name: "Average", path: "/average" },
    { name: "Profit and Loss", path: "/profitloss" },
    { name: "Simple Interest ", path: "/simpleinterest" },
    { name: "Compound Interest ", path: "/compoundinterest" },
  ];
  return (
<>      <div className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Online Aptitude Test , Solved Aptitude Questions, Apti Test
        </h2>
        <p className="mb-6 text-gray-500 ">
          This page is all about aptitude online test fomula, tricks, aptitude
          problems. Here you will get 5000+ Apti test. Aptitude is one of the
          most important categories in all competitive exams and entrance exams.
          This consists of the page from the sub-categories (Topic wise) of the
          Aptitude category like simplifying and time, labor, time and distance,
          simple and useful, compound interest, averages, partnership, ratio and
          proportion, the problems of the times, the permutations and mixed,
          percentage, LCM and HCF and more. Candidates can take mock test
          chapter wise or topic wise aptitude test for exams like SSC CGL, SSC
          CHSL, SSC MTS, SSC Group D, Railway Group D, UPSC, IAS exams, Banking
          exams like IBPS PO, Clerk, NDA exams, Police Constable exams, etc. In
          each topic, you will get formulas and shortcut tricks.
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
        {/* <Check className="h-5 w-5 text-blue-500 mr-3"  /> */}
            <Link to={topic.path}>{topic.name}</Link>
           
           
          </li>
        ))}
      </ul>


        <div className="bg-blue-400 h-1 my-6"></div>
        <h1 className="text-2xl  font-bold mb-3">Aptitude Online Mock test </h1>
        <p className="mb-3 text-gray-500  text-justify">
          <p className="mb-3 text-gray-500  text-justify">
            Test your skills by writing those exams test your knowledge of the
            result. In the market there are also plenty of books available for
            efficiency. But instead of buying a book and we offer a lot of
            questions in the test papers at free of cost. Take this one as an
            opportunity and try to get a great benefit. If you want to report
            anything please post in the forum for debate and doubt to get your
            clarification.
          </p>
          <p className="mb-3 text-gray-500  text-justify">
            If you are preparing for any of the following exams only setup here
            is defined by the ability to consider the total marks. Most of the
            students are not perfect in the efficiency category but good in
            another subject sometimes they will get scared, too. That is why we
            are here to help you. The study included all the basics of materials
            and formats as well. Each category has the basics along with the
            tests.
          </p>
         
        </p>
      </div>
      </>

  );
};
export default Aptitude;
