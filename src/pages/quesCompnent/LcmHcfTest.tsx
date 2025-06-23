import React from "react";
import QuestionsComponent from "../../components/reusable/QuestionsComponent";
import lcmhcfQuestions from "../../data/lcmhcfQuestions.json";
import { useParams } from "react-router-dom";
const LcmHcfTest: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();

  return (
    <QuestionsComponent
      testId={testId ?? "1"}
      questions={lcmhcfQuestions.questions}
      timeLimit={30*60} 
    />
  );
};
export default  LcmHcfTest;