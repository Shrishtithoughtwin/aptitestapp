import React from "react";
import { Link } from "react-router-dom"; 


const Home: React.FC = () => {
  return (
   <>
      <div className="text-center">
        <h1 className="text-4xl font-size-36px ">
          Questions and Answers for Competitive Exams, Free Online Test, Mock
          test Series, MCQ Questions, Practice Test , Online Quiz
        </h1>
        <p className=" text-2xl mt-4">Take practice tests and improve your skills.</p>
      </div>

      <div className="container mx-auto mt-8">
  <div className="flex justify-center">
    <div className="card border border-gray-400 shadow-xl w-full max-w-md">
      <div className="card-body text-center ">
        
      <div className="bg-blue-500 text-white py-3 px-4 border-b border-gray-400">
  <h2 className="card-title text-2xl">Aptitude</h2>
</div>
        <ul className="list-none  ">
          <li className="text-lg border border-gray-300  px-4 py-2 hover:text-blue-400 cursor-pointer">
            <Link to="/simpleinterest">Simple Interest</Link>
          </li>
          <li className="text-lg border border-gray-300  px-4 py-2 hover:text-blue-400 cursor-pointer">
            <Link to="/compoundinterest">Compound Interest</Link>
          </li>
          <li className="text-lg border border-gray-300 px-4 py-2 hover:text-blue-400 cursor-pointer">
          <Link to="/average">Average</Link>
          </li>
          <li className="text-lg border border-gray-300 px-4 py-2 hover:text-blue-400 cursor-pointer">
            <Link to="/aptitude">Learn More</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



      <div className="bg-blue-400 h-1 my-6"></div>
      <p className="mb-3 text-gray-500  text-justify">
        <p className="mb-3 text-gray-500  text-justify">
        All about freeonlinetest.in Home page: This page is having all the main
        categories list mentioned in this website. Those are Aptitude,
        Reasoning, English, General knowledge, Computer, Professional Knowledge
        and model papers. These model papers useful for all banking examinations
        like IBPS Clerk, IBPS Probationary Officer, IBPS Specialist Officer, SBI
        Probationary Officer, SBI clerk, SBI Specialist Officer, RRB and RBI
        Grade B and other competitive examinations. There is no need of
        registration and no need to pay the money. It is free of cost. Start
        using it and share it with your friends if you like this website. This
        web site helps for below mentioned exams.
        </p>
        <p className="mb-3 text-gray-500  text-justify">
         Why freeonlinetest ? why not
        other websites? This is the only website which display time spent on
        each question along with full report, Handling negative marking in the
        test, Good navigation through out website, Corresponding materials are
        available for each topic, Previous year questions along with solutions,
        All questions are prepared by most experienced faculty and members,
        Color coding system while taking the online test, Model papers are also
        available in separate section, Guidance for interview preparation and
        helping aspirants by responding to their questions via emails, Posting
        model questions in social media networks such as Facebook, Twitter,
        Google plus etc.
        </p>
        
      </p>
      </>
  );
};

export default Home;
