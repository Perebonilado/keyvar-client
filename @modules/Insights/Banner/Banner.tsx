import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import s from "./styles.module.css";

const Banner: FC = () => {
  return (
    <header className={s.banner}>
      <Container className="pt-20 pb-10">
        <h1 className=" w-full font-bold text-5xl max-sm:text-3xl leading-relaxed">
          Insights
        </h1>

        <p className="font-semibold w-full max-w-[550px] mt-10">
          Get the <span className="text-[#2C00B9]">latest updates</span> and delve into the digital landscape with
          unique perspectives from the team.
        </p>
      </Container>
    </header>
  );
};

export default Banner;
