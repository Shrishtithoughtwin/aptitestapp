import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"; 
import Aptitude from "../pages/aptitude/Aptitude"; 
import Average from "../pages/average/Average";  
import SimpleInterest from "../pages/sipage/SimpleInterest";
import CompoundInterest from "../pages/cipage/CompoundInterest";
import ProfitLoss from "../pages/profitloss/ProfitLoss";
import LcmHcf from "../pages/lcmhcf/LcmHcf";
import MainLayout from "../layouts/MainLayout";
import ViewResult from "../pages/viewresult/ViewResult";
import TestRuleCi from "../pages/testrule/TestRuleCi";
import CiTest from "../pages/quesCompnent/CiTest";
import TestRuleLh from "../pages/testrule/TestRuleLh";
import LcmHcfTest from "../pages/quesCompnent/LcmHcfTest";
import ProfitLossTest from "../pages/quesCompnent/ProfitLossTest";
import TestRulePl from "../pages/testrule/TestRulePl";
import TestRuleSi from "../pages/testrule/TestRuleSi";
import SiTest from "../pages/quesCompnent/SiTest";
import TestRuleAvg from "../pages/testrule/TestRuleAvg";
import AverageTest from "../pages/quesCompnent/AverageTest";

const AppRoutes: React.FC = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aptitude" element={<Aptitude />} />
       <Route path="/average" element={<Average />} />
      <Route path="/simpleinterest" element={<SimpleInterest />} />
      <Route path="/compoundinterest" element={<CompoundInterest />} />
      <Route path="/profitloss" element={<ProfitLoss />} />
      <Route path="/lcmhcf" element={<LcmHcf />} /> 
      <Route path="/test-rule-avg/:testId" element={<TestRuleAvg />} />
      <Route path="/test-rule-ci/:testId" element={<TestRuleCi />} />
      <Route path="/test-rule-lh/:testId" element={<TestRuleLh />} />
      <Route path="/test-rule-pl/:testId" element={<TestRulePl />} />
      <Route path="/test-rule-si/:testId" element={<TestRuleSi />} />
      <Route path="/avg-test/:testId" element={<AverageTest/>}/>
      <Route path="/ci-test/:testId" element={<CiTest/>}/>
      <Route path="/si-test/:testId" element={<SiTest/>}/>
      <Route path="/profit-loss-test/:testId" element={<ProfitLossTest/>}/>
      <Route path="/lh-test/:testId" element={<LcmHcfTest/>}/>
      <Route path="/viewresult" element={<ViewResult score={0} totalQuestions={0} />} />
    </Routes>
  </MainLayout>
);

export default AppRoutes;
