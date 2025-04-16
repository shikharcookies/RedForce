import React from "react";
import { Header } from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      {/* Adjusted margin for smaller layout */}
      <div className="mx-3 md:mx-10 lg:mx-20">{children}</div>
    </div>
  );
}

export default DashboardLayout;
