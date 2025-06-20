
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import averageQuestions from "../../data/averageQuestions.json";
import ViewResult from "../viewresult/ViewResult";

const QuestionsComponent: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<number, number | null>
  >({});
  const [score, setScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(30 * 60); // 30 minutes in seconds
  const [testCompleted, setTestCompleted] = useState(false);
  const [questionStatus, setQuestionStatus] = useState<
    Record<number, "answered" | "visited" | "unvisited">
  >({});

  const testQuestions = averageQuestions.questions.filter(
    (q) => q.set === (testId === "1" ? "A" : "B")
  );

  const currentQuestion = testQuestions[currentQuestionIndex];

  useEffect(() => {
    if (remainingTime === 0) {
      setTestCompleted(true);
    }

    const timer = setInterval(() => {
      setRemainingTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} mins : ${seconds < 10 ? "0" : ""}${seconds} secs`;
  };

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [currentQuestionIndex]: optionIndex,
    }));

    setQuestionStatus((prevStatus) => ({
      ...prevStatus,
      [currentQuestionIndex]: "answered",
    }));

    if (optionIndex === currentQuestion.correctOption) {
      setScore((prevScore) =>
        selectedOptions[currentQuestionIndex] !== currentQuestion.correctOption
          ? prevScore + 1
          : prevScore
      );
    } else {
      setScore((prevScore) =>
        selectedOptions[currentQuestionIndex] === currentQuestion.correctOption
          ? prevScore - 1
          : prevScore
      );
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setQuestionStatus((prevStatus) => ({
        ...prevStatus,
        [currentQuestionIndex + 1]:
          prevStatus[currentQuestionIndex + 1] === "answered"
            ? "answered"
            : "visited",
      }));
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        setQuestionStatus((prevStatus) => ({
          ...prevStatus,
          [newIndex]:
            prevStatus[newIndex] === "answered" ? "answered" : "visited",
        }));
        return newIndex;
      });
    }
  };

  const handleSubmitTest = () => {
    setTestCompleted(true);
  };

  const handleNavigateQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setQuestionStatus((prevStatus) => ({
      ...prevStatus,
      [index]: prevStatus[index] === "answered" ? "answered" : "visited",
    }));
  };

  return (
    <div className="container mx-auto p-6">
      {!testCompleted ? (
        <div className="grid grid-cols-3 gap-6">
          {/* Question Content (Left Side) */}
          <div className="col-span-2 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-red-500">
              Question No. {currentQuestionIndex + 1})
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
                    name="option"
                    id={`option-${idx}`}
                    value={idx}
                    checked={selectedOptions[currentQuestionIndex] === idx}
                    onChange={() => handleOptionClick(idx)}
                    className="mr-3"
                  />
                  <label
                    htmlFor={`option-${idx}`}
                    className="text-black cursor-pointer"
                  >
                    {String.fromCharCode(65 + idx)}) {option}
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between">
              <button
                className=" text-black px-4 py-2 rounded border-blue-400 border-2"
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
              >
                ← Prev
              </button>
              <button
                className=" text-black px-4 py-2 rounded border-blue-400 border-2"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === testQuestions.length - 1}
              >
              Next →
              </button>
            </div>
          </div>

          {/* Timer and Navigation (Right Side) */}
          <div className="col-span-1 bg-gray-50 p-4 rounded-lg shadow-lg">
            <div className="bg-blue-200 text-blue-800 p-2 rounded-lg font-semibold text-center mb-4">
              Time Left - {formatTime(remainingTime)}
            </div>
            <h2 className="text-black font-semibold text-center mb-4">
              Question Navigation
            </h2>
            <div className="grid grid-cols-5 gap-2">
              {testQuestions.map((_, index) => (
                <button
                  key={index}
                  className={`p-2 rounded-full text-sm ${
                    index === currentQuestionIndex
                      ? "ring-4 ring-blue-300"
                      : ""
                  } ${
                    questionStatus[index] === "answered"
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
              Submit Test
            </button>
          </div>
        </div>
      ) : (
        <ViewResult score={score} totalQuestions={testQuestions.length} />
      )}
    </div>
  );
};

export default QuestionsComponent;
