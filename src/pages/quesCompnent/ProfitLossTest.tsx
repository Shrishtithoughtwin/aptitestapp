
import React from "react";
import QuestionsComponent from "../../components/reusable/QuestionsComponent";
import plQuestions from "../../data/plQuestions.json"
import { useParams } from "react-router-dom";
const ProfitLossTest: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();

  return (
    <QuestionsComponent
      testId={testId ?? "1"} 
      questions={plQuestions.questions}
      timeLimit={30*60} 
    />
  );
};
export default  ProfitLossTest;