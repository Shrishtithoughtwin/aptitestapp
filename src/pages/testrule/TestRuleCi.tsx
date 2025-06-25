import { useNavigate, useParams } from "react-router-dom";
import ciQuestions from "../../data/ciQuestions.json";
import TestRuleCard from "../../components/reusable/TestRuleCard";
import { useTranslation } from "react-i18next";
const TestRuleCi = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { testId } = useParams<{ testId: string }>();

  const testSetMap: Record<string, string> = {
    "1": "A",
    "2": "B",
  };
 const mappedTestId = testSetMap[testId ?? ""] ?? testId;

  const test = ciQuestions.tests.find(
    (t) => t.set.toLowerCase() === mappedTestId?.toLowerCase()
  );

  if (!test) {
    return (
      <div className="text-center mt-10 text-red-600 font-bold text-xl">
        {t("test.invalidTest")}<br />
        {t("test.invalidTestSuggestion")}.
      </div>
    );
  }

  return (
    <TestRuleCard
     title={t("test.titles.ci")}
      testId={testId ?? "1"}
      test={test}
      onStartTest={() => navigate(`/ci-test/${testId}`)}
    />
  );
};
export default TestRuleCi;