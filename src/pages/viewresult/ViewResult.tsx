import React from "react";
interface ViewResultProps {
  score: number;
  totalQuestions: number;
}

const ViewResult: React.FC<ViewResultProps> = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="container mx-auto text-center p-8 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Test Results</h2>

      {/* Score Display */}
      <div className="mb-8">
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Your Score:
        </p>
        <p className="text-5xl font-extrabold text-blue-500">
          {score} / {totalQuestions}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full max-w-md mx-auto mb-8">
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
          <div
            className={`h-6 transition-all duration-500 rounded-full ${
              percentage >= 75
                ? "bg-green-500"
                : percentage >= 50
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

<div className="absolute inset-0 flex justify-center items-center">
          <p className="text-sm font-semibold text-gray-700">
          Performance Bar
          </p>
        </div> 
      </div>

      {/* Feedback */}
      <div className="mb-6">
        {percentage >= 75 && (
          <p className="text-lg font-medium text-green-600">
            🎉 Excellent work! Keep it up!
          </p>
        )}
        {percentage >= 50 && percentage < 75 && (
          <p className="text-lg font-medium text-yellow-600">
            😊 Good effort! A little more practice will help!
          </p>
        )}
        {percentage < 50 && (
          <p className="text-lg font-medium text-red-600">
            😟 Don't worry! Practice makes perfect.
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          Retake Test
        </button>
      </div>
    </div>
  );
};

export default ViewResult;
