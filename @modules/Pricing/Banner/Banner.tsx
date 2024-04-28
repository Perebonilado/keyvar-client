import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import s from "./styles.module.css";

const Banner: FC = () => {
  return (
    <header className={s.banner}>
      <Container className="py-40">
        <h1 className="text-center mx-auto w-full max-w-[500px] font-bold text-5xl max-sm:text-3xl leading-relaxed">
          Pick the best plan for your needs
        </h1>
      </Container>
    </header>
  );
};

export default Banner;
