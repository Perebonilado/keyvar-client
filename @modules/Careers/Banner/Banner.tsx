import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import s from "./styles.module.css";

const Banner: FC = () => {
  return (
    <header className={s.banner}>
      <Container className="pt-20 pb-10">
        <h1 className=" w-full font-bold text-5xl max-sm:text-3xl leading-snug max-w-[500px]">
          Explore our career opportunities
        </h1>

        <p className="font-semibold w-full max-w-[500px] mt-10">
          Join Keyvar as we continue to grow and leave a lasting{" "}
          <span className="text-[#2C00B9]"> impact</span> on the world.
        </p>
      </Container>
    </header>
  );
};

export default Banner;
