import React from "react";
import QuestionsComponent from "../../components/reusable/QuestionsComponent";
import siQuestions from "../../data/siQuestions.json";
import { useParams } from "react-router-dom";
const SiTest: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();

  return (
    <QuestionsComponent
      testId={testId ?? "1"} 
      questions={siQuestions.questions}
      timeLimit={30*60} 
    />
  );
};
export default  SiTest;