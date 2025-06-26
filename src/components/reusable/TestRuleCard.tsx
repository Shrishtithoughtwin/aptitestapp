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
