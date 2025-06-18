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
import TestInstruction from "../pages/testrule/TestInstruction";

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
      <Route path="/testinstruction" element={<TestInstruction/>}/>
    </Routes>
  </MainLayout>
);

export default AppRoutes;
