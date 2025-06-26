
import React, { useState, useEffect } from "react";
import ConfirmModal from "../../pages/modal_component/ConfirmModal";
import ViewResult from "../../pages/viewresult/ViewResult";
import { useTranslation } from "react-i18next";
interface Question {
  question: string;
  options: string[];
  correctOption: number;
  selectedOption: number | null;
}
interface QuestionsComponentProps {
  testId: string;
  questions: Question[];
  timeLimit: number; 
  marksPerQuestion: number;
  negativeMark: number;
}

const QuestionsComponent: React.FC<QuestionsComponentProps> = ({
  questions,
  timeLimit,
  marksPerQuestion,
  negativeMark,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number | null>>({});
  const [score, setScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(timeLimit);
  const [testCompleted, setTestCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionStatus, setQuestionStatus] = useState<Record<number, "answered" | "visited" | "unvisited">>({});
  const {t}=useTranslation();
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!testCompleted) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [testCompleted]);

  useEffect(() => {
    if (remainingTime === 0 && !testCompleted) {
      handleConfirmSubmit();
    }
    const timer = setInterval(() => {
      setRemainingTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingTime, testCompleted]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} mins : ${seconds < 10 ? "0" : ""}${seconds} secs`;
  };

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOptions((prev) => {
      const updated = { ...prev, [currentQuestionIndex]: optionIndex };
      let newScore = 0;
  
      for (const [indexStr, selected] of Object.entries(updated)) {
        const index = parseInt(indexStr);
        const correct = questions[index].correctOption;
  
        if (selected === correct) {
          newScore += marksPerQuestion;
        } else if (selected !== null && selected !== undefined) {
          newScore -= negativeMark;
        }
      }
  
      setScore(newScore);
      return updated;
    });
  
    setQuestionStatus((prev) => ({
      ...prev,
      [currentQuestionIndex]: "answered",
    }));
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      updateStatusBeforeNavigation();
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      updateStatusBeforeNavigation();
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNavigateQuestion = (index: number) => {
    updateStatusBeforeNavigation();
    setCurrentQuestionIndex(index);
  };

  const updateStatusBeforeNavigation = () => {
    setQuestionStatus((prev) => ({
      ...prev,
      [currentQuestionIndex]: selectedOptions[currentQuestionIndex] !== undefined
        ? "answered"
        : "visited",
    }));
  };

  const handleSubmitTest = () => setIsModalOpen(true);

  const handleConfirmSubmit = () => {
    setIsModalOpen(false);
    setTestCompleted(true);
  };

  const handleCancelSubmit = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto p-6">
      {!testCompleted ? (
        <div className="grid grid-cols-3 gap-6">
          {/* Question Panel */}
          <div className="col-span-2 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-red-500">
            {t("questionsComp.questionNo")} . {currentQuestionIndex + 1})
            </h2>
            <p className="mb-6 text-black">{currentQuestion.question}</p>
            <ul className="space-y-2">
              {currentQuestion.options.map((option, idx) => (
                <li
                  key={idx}
                  className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                  onClick={() => handleOptionClick(idx)}
                >
                  <input
                    type="radio"
                    name={`option-${currentQuestionIndex}`}
                    id={`option-${idx}`}
                    value={idx}
                    checked={selectedOptions[currentQuestionIndex] === idx}
                    onChange={() => handleOptionClick(idx)}
                    className="mr-3"
                  />
                  <label htmlFor={`option-${idx}`} className="text-black cursor-pointer">
                    {String.fromCharCode(65 + idx)}) {option}
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between">
              <button
                className="text-black px-4 py-2 rounded border-blue-400 border-2"
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
              >
                 {t("questionsComp.prev")}
              </button>
              <button
                className="text-black px-4 py-2 rounded border-blue-400 border-2"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
              >
             {t("questionsComp.next")}
              </button>
            </div>
          </div>

          {/* Navigation Panel */}
          <div className="col-span-1 bg-gray-50 p-4 rounded-lg shadow-lg">
            <div className="bg-blue-200 text-blue-800 p-2 rounded-lg font-semibold text-center mb-4">
            {t("questionsComp.timeLeft")}  - {formatTime(remainingTime)}
            </div>
            <h2 className="text-black font-semibold text-center mb-4">
            {t("questionsComp.navigation")}
            </h2>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`p-2 rounded-full text-sm ${
                    index === currentQuestionIndex
                      ? "ring-4 ring-blue-300 bg-gray-300 text-black"
                      : questionStatus[index] === "answered"
                      ? "bg-green-500 text-white"
                      : questionStatus[index] === "visited"
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => handleNavigateQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className="mt-4 bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
              onClick={handleSubmitTest}
            >
           {t("questionsComp.submit")}
            </button>
          </div>
        </div>
      ) : (
<ViewResult
  score={score}
  totalQuestions={questions.length}
  marksPerQuestion={marksPerQuestion}
  totalMarks={questions.length * marksPerQuestion} // Pass total marks here
  results={questions.map((q, index) => ({
    question: q.question,
    options: q.options,
    correctOption: q.correctOption,
    selectedOption: selectedOptions[index] ?? null,
  }))}
/>

      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={handleCancelSubmit}
        onConfirm={handleConfirmSubmit}
      />
    </div>
  );
};

export default QuestionsComponent;
