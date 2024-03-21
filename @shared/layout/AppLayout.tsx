import React, { FC, PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
    </section>
  );
};

export default AppLayout;
