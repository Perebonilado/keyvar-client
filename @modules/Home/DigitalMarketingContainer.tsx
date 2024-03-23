import Button from "@/@shared/ui-components/Button";
import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";

const DigitalMarketingContainer: FC = () => {
  return (
    <section className="py-20 min-h-screen">
      <Container>
        <div className="flex max-md:flex-col pt-10">
          <div style={{ flex: 1 }}>
            <div className="w-full max-w-[600px]">
              <h2 className="text-5xl font-bold leading-relaxed mb-4 max-md:text-3xl">
                Digital marketing + Personalized service
              </h2>
              <p className="text-base w-full max-w-[500px]">
                <i>
                  "With the right digital marketing strategy, small and medium
                  business can experience can experience a{" "}
                  <span className="text-[#2C00B9] font-bold">30% boost</span>"
                </i>
              </p>

              <Button title="Learn more" variant="outlined" size="large" className="mt-16"/>
            </div>
          </div>

          <div style={{ flex: 1 }}></div>
        </div>
      </Container>
    </section>
  );
};

export default DigitalMarketingContainer;
