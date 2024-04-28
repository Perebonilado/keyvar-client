import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";

const OurCommitmentContainer: FC = () => {
  return (
    <section className="bg-[#020228]">
      <div className="bg-white rounded-t-3xl py-20 text-center">
        <Container>
          <h2 className="text-4xl max-md:text-3xl font-semibold">Our Commitment</h2>

          <p className="w-full max-w-[800px] mx-auto mt-6 max-md:text-sm">
            To our clients, we promise not just results but a journey of
            collaboration and growth. We're not just service providers; we're
            partners in your success, dedicated to enhancing your brand's
            digital narrative.
          </p>
        </Container>
      </div>
    </section>
  );
};

export default OurCommitmentContainer;
