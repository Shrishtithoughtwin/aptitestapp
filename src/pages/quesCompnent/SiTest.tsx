import React from "react";
import QuestionsComponent from "../../components/reusable/QuestionsComponent";
import siQuestions from "../../data/siQuestions.json";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SiTest: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
const {i18n,t}=useTranslation();
  const testSetMap: Record<string, string> = {
    "1": "A",
    "2": "B",
  };

  const mappedTestId = testSetMap[testId ?? "1"];

  const test = siQuestions.tests.find(
    (t) => t.set === mappedTestId
  );

  if (!test) {
    return (
      <div className="text-center text-red-500 font-bold mt-10">
         {t("test.invalidTest")}
      </div>
    );
  }

  const translatedQuestions = test.questions.map((q) => {
    const languageKey = i18n.language as "en" | "hi"; 
  
    return {
      id: q.id,
      question: q.languages[languageKey].question,
      options: q.languages[languageKey].options,
      correctOption: q.languages[languageKey].correctOption,
      selectedOption: null,
    };
  });

  return (
    <QuestionsComponent
      testId={testId ?? "1"} 
      questions={translatedQuestions}
      timeLimit={test.timeLimitMinutes * 60}
      marksPerQuestion={test.marksPerQuestion}
      negativeMark={test.negativeMark}
    />
  );
};
export default  SiTest;