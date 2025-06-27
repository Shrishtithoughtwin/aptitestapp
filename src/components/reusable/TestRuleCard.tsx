import React from "react";
import { useTranslation } from "react-i18next";
interface TestRuleCardProps {
  title: string;
  testId: string;
  test: {
    questionCount: number;
    marksPerQuestion: number;
    negativeMark: number;
    timeLimitMinutes: number;
  };
  onStartTest: () => void;
}

const TestRuleCard: React.FC<TestRuleCardProps> = ({
  title,
  test,
  onStartTest,
}) => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto p-6 text-center  rounded-lg bg-base-100 border border-gray-200">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <ul className="text-left text-lg mb-6 space-y-2">
        <h1 className="text-2xl font-bold mb-4">{t("testCard.instructions")}</h1>

        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">{t("testCard.questions")}:</span>{" "}
            {test.questionCount}
          </span>
        </li>

        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">{t("testCard.marks")}:</span>{" "}
            {test.marksPerQuestion}  {t("testCard.mark")}
          </span>
        </li>

        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">{t("testCard.negative")}:</span>{" "}
            {test.negativeMark}
          </span>
        </li>

        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">{t("testCard.skip")}:</span>{" "}
            {t("testCard.skipDetails")}
          </span>
        </li>

        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-400 inline-block mr-2 mt-2"></span>
          <span>
            <span className="font-medium">{t("testCard.time")}:</span>{" "}
            {test.timeLimitMinutes}  {t("testCard.minutes")}
          </span>
        </li>
      </ul>

<div className="mb-6">
  <h2 className="text-3xl font-semibold mb-2">
    {t("testCard.navigationInstruction")}
  </h2>
  <div className="grid  gap-2  text-left">
    <div className="flex items-center space-x-2">
      <span className="w-4 h-4 bg-green-500 rounded-full inline-block border border-gray-400"></span>
      <span>{t("testCard.answered") } - <span className="text-green-600 font-medium">Green</span></span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="w-4 h-4 bg-red-500 rounded-full inline-block border border-gray-400"></span>
      <span>{t("testCard.visited") } - <span className="text-red-600 font-medium">Red</span></span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="w-4 h-4 bg-gray-400 rounded-full inline-block border border-gray-400"></span>
      <span>{t("testCard.unvisited") } - <span className="text-gray-600 font-medium">Gray</span></span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="w-4 h-4 bg-yellow-400 rounded-full inline-block border border-gray-400"></span>
      <span>{t("testCard.cleared")} - <span className="text-yellow-600 font-medium">Yellow</span></span>
    </div>
    <div className="flex items-center space-x-2 col-span-full">
      <span className="w-4 h-4 bg-gray-400 rounded-full border-4 border-blue-400 inline-block"></span>
      <span>
        {t("testCard.current")} -{" "}
        <span className="text-blue-600 font-medium">Current Question (Blue Outline)</span>
      </span>
    </div>
  </div>
</div>
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-3xl hover:bg-blue-600"
        onClick={onStartTest}
      >
        {t("testCard.start")}
      </button>
    </div>
  );
};

export default TestRuleCard;
