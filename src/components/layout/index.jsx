import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

const Theme = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </main>
  );
};

export default Theme;
