
import React from "react";
import QuestionsComponent from "../../components/reusable/QuestionsComponent";
import averageQuestions from "../../data/averageQuestions.json";
import { useParams } from "react-router-dom";
const AverageTest: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();

  return (
    <QuestionsComponent
      testId={testId ?? "1"} 
      questions={averageQuestions.questions}
      timeLimit={30*60} 
    />
  );
};
export default AverageTest;