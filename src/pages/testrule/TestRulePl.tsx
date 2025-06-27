import { useNavigate, useParams } from "react-router-dom";
import plQuestions from "../../data/plQuestions.json"
import TestRuleCard from "../../components/reusable/TestRuleCard";
import { useTranslation } from "react-i18next";
const TestRulePl = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { testId } = useParams<{ testId: string }>();

  const testSetMap: Record<string, string> = {
    "1": "A",
    "2": "B",
  };

  const mappedTestId = testSetMap[testId ?? ""] ?? testId;

  const test = plQuestions.tests.find(
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
    title={t("test.titles.pl")}
      testId={testId ?? "1"}
      test={test}
      onStartTest={() => navigate(`/profit-loss-test/${testId}`)}
    />
  );
};

export default TestRulePl;
