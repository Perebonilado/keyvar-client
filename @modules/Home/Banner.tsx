import Button from "@/@shared/ui-components/Button";
import Container from "@/@shared/ui-components/Container";
import ArrowRight from "@/icons/ArrowRight";
import React, { FC } from "react";

const Banner: FC = () => {
  return (
    <section className="bg-[#FBF9F0]">
      <Container>
        <div className="min-h-screen  flex flex-col justify-center w-full max-w-[800px]">
          <h1 className="text-5xl max-md:text-3xl leading-snug font-bold">
            We help elevate your brand with{" "}
            <span className="text-[#2C00B9]">strategic digital solutions</span>
          </h1>

          <p className="pt-8 pb-20 font-semibold w-full max-w-[500px]">
            From groundbreaking business ideas to unique creative projects, we
            specialize in crafting bespoke digital marketing strategies that
            make your goals a reality.
          </p>

          <Button
            title="Get in touch"
            size="large"
            className="w-full max-w-[350px] !text-base !justify-between"
            endicon={<ArrowRight />}
          />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
