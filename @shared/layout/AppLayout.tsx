import React, { FC, PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
  bgColor?: "default" | "white";
}

const AppLayout: FC<PropsWithChildren<Props>> = ({
  children,
  bgColor = "default",
}) => {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer bgColor={bgColor} />
    </section>
  );
};

export default AppLayout;
