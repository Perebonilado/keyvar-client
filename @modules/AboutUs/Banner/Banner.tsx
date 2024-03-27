import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import s from "./styles.module.css";

const Banner: FC = () => {
  return (
    <header className={s.banner}>
      <Container className="pt-20 pb-10">
        <h1 className=" w-full font-bold text-5xl max-sm:text-3xl leading-relaxed">
          About us
        </h1>

        <p className="font-semibold w-full max-w-[550px] mt-10">
          We deliver cutting-edge digital marketing with personalized service.
          Founded by Kalada Nemieboka, a visionary with a passion for
          data-driven strategies, Keyvar Solutions is more than just a digital
          marketing agency; it's a hub of innovation nestled in the heart of
          <span className="text-[#2C00B9]"> McLean, Virginia.</span>
        </p>
      </Container>
    </header>
  );
};

export default Banner;
