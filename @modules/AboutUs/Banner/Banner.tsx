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
          At <span className="text-[#2C00B9]">Keyvar Solutions</span>, we elevate your digital marketing with innovative
          strategies, integrate traditional digital marketing techniques with
          advanced machine learning and data analytics to deliver measurable
          results. Serving businesses in the Washington Metropolitan area and
          beyond, our expert team is <span className="text-[#2C00B9]">committed to helping</span> you achieve your
          marketing goals.
        </p>
      </Container>
    </header>
  );
};

export default Banner;
