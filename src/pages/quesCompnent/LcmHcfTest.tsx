import React from "react";
import QuestionsComponent from "../../components/reusable/QuestionsComponent";
import lcmhcfQuestions from "../../data/lcmhcfQuestions.json";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const LcmHcfTest: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const {t}=useTranslation();
  const testSetMap: Record<string, string> = {
    "1": "A",
    "2": "B",
  };

  const mappedTestId = testSetMap[testId ?? "1"];

  const test = lcmhcfQuestions.tests.find(
    (t) => t.set === mappedTestId
  );

  if (!test) {
    return (
      <div className="text-center text-red-500 font-bold mt-10">
      {t("test.invalidTest")}
      </div>
    );
  }


  return (
    <QuestionsComponent
      testId={testId ?? "1"} 
      questions={test.questions.map((q) => ({ ...q, selectedOption: null }))}
            timeLimit={test.timeLimitMinutes * 60}
            marksPerQuestion={test.marksPerQuestion}
            negativeMark={test.negativeMark}
    />
  );
};
export default  LcmHcfTest;