import React from "react";
import Header from "../components/header/Header";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">{children}</main>
    
    </div>
  );
};

export default MainLayout;
