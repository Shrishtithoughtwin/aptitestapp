
import React from "react";
import QuestionsComponent from "../../components/reusable/QuestionsComponent";
import ciQuestions from "../../data/ciQuestions.json"
import { useParams } from "react-router-dom";
const CiTest: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();

  return (
    <QuestionsComponent
      testId={testId ?? "1"} 
      questions={ciQuestions.questions}
      timeLimit={30*60} 
    />
  );
};
export default  CiTest;