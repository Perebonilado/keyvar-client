import React, { FC, PropsWithChildren } from "react";
import Navbar from "../components/Navbar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </section>
  );
};

export default AppLayout;
