import { useNavigate, useParams } from "react-router-dom";
import averageQuestions from "../../data/averageQuestions.json";
import { useTranslation } from "react-i18next";
import TestRuleCard from "../../components/reusable/TestRuleCard";

const TestRuleAvg = () => {
  const navigate = useNavigate();
  const { testId } = useParams<{ testId: string }>();
  const { t } = useTranslation();
  const testSetMap: Record<string, string> = {
    "1": "A",
    "2": "B",
  };

  const mappedTestId = testSetMap[testId ?? ""] ?? testId;

  const test = averageQuestions.tests.find(
    (t) => t.set.toLowerCase() === mappedTestId?.toLowerCase()
  );

  if (!test) {
    return (
      <div className="text-center mt-10 text-red-600 font-bold text-xl">
      {t("test.invalidTest")}<br />
      {t("test.invalidTestSuggestion")}
      </div>
    );
  }

  return (
    <TestRuleCard
     title={t("test.titles.avg")}
      testId={testId ?? "1"}
      test={test}
      onStartTest={() => navigate(`/avg-test/${testId}`)}
    />
  );
};

export default TestRuleAvg;