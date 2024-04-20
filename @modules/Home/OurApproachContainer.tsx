import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import OurApproachItem from "./OurApproachItem";

const OurApproachContainer: FC = () => {
  return (
    <section className="py-14">
      <Container>
        <h4 className="text-center text-3xl font-semibold">Our Approach</h4>
        <p className="text-center w-full max-w-[600px] mx-auto mt-10">
          At Keyvar, we believe in the power of data to transform businesses.
          Our process is proven to guarantee results that help you win.
        </p>

      </Container>
    </section>
  );
};

export default OurApproachContainer;
