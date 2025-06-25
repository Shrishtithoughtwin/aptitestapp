
import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useTranslation } from "react-i18next";
interface QuestionResult {
  question: string;
  options: string[];
  correctOption: number;
  selectedOption: number | null;
}

interface ViewResultProps {
  score: number;
  totalQuestions: number;
  results: QuestionResult[];
}

const ViewResult: React.FC<ViewResultProps> = ({
  score,
  totalQuestions,
  results,
}) => {
  const { t } = useTranslation();
  const percentage = (score / totalQuestions) * 100;
  const { width, height } = useWindowSize();

  const confettiPieces =
    percentage >= 75 ? 500 : percentage >= 50 ? 300 : 200;

  return (
    <div className="container mx-auto text-center p-8 shadow-lg rounded-lg">
      <Confetti width={width} height={height} numberOfPieces={confettiPieces} recycle={false} />
      
      <h2 className="text-4xl font-bold text-blue-600 mb-6">  {t("viewresult.title")}</h2>

      <div className="mb-8">
        <p className="text-2xl font-semibold text-gray-500 mb-2">{t("viewresult.yourScore")}:</p>
        <p className="text-5xl font-extrabold text-blue-500">
          {score} / {totalQuestions}
        </p>
      </div>

      <div className="relative w-full max-w-md mx-auto mb-8">
        <div className="w-full  rounded-full h-6 overflow-hidden shadow-inner">
          <div
            className={`h-6 transition-all duration-500 rounded-full ${
              percentage >= 75
                ? "bg-green-500"
                : percentage >= 50
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-sm font-semibold text-gray-700">{t("viewresult.performanceBar")}</p>
        </div>
      </div>

      <div className="mb-6">
        {percentage >= 75 && (
          <p className="text-lg font-medium text-green-600">
              {t("viewresult.excellent")}
          </p>
        )}
        {percentage >= 50 && percentage < 75 && (
          <p className="text-lg font-medium text-yellow-600">
            {t("viewresult.good")}
          </p>
        )}
        {percentage < 50 && (
          <p className="text-lg font-medium text-red-600">
             {t("viewresult.poor")}
          </p>
        )}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
           {t("viewresult.retake")}
        </button>
      </div>

      {/* Review Answers */}
      <div className="text-left mt-8">
        <h3 className="text-2xl font-bold mb-4 text-center">  {t("viewresult.review")}</h3>
        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg">
              <p className="mb-2 font-semibold text-gray-500">
              {t("viewresult.question", {
                  num: index + 1,
                  text: result.question,
                })}
              </p>
              <ul className="space-y-1 pl-4">
                {result.options.map((option, idx) => {
                  const isCorrect = idx === result.correctOption;
                  const isSelected = idx === result.selectedOption;
                  const isWrong = isSelected && !isCorrect;

                  return (
                    <li
                      key={idx}
                      className={`p-2 rounded-md ${
                        isCorrect
                          ? "bg-green-200 text-green-800 font-semibold"
                          : isWrong
                          ? "bg-red-200 text-red-800 font-semibold"
                          : isSelected
                          ? "bg-yellow-100 text-yellow-800"
                          : ""
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}) {option}
                      {isCorrect && " ✔"}
                      {isWrong && " ❌"}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewResult;

