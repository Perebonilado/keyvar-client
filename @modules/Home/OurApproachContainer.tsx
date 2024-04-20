import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import OurApproachItem from "./OurApproachItem";
import Link from "next/link";
import Button from "@/@shared/ui-components/Button";
import { NavLinks } from "@/@shared/constants";
import Image from "next/image";

const OurApproachContainer: FC = () => {
  return (
    <section className="py-14">
      <Container>
        <h4 className="text-center text-3xl font-semibold">Our Approach</h4>
        <p className="text-center w-full max-w-[600px] mx-auto mt-10">
          At Keyvar, we believe in the power of data to transform businesses.
          Our process is proven to guarantee results that help you win.
        </p>

        <div className="my-36 flex justify-center gap-10 flex-wrap gap-y-24">
          {data.map((d, idx) => {
            return <OurApproachItem {...d} key={idx} />;
          })}
        </div>

        <div className="w-full mx-auto max-w-[300px]">
          <p className="text-sm mb-3 text-center">
            I want a proposal for my business:
          </p>

          <Link href={NavLinks.leads.link}>
            <Button title="Get in touch" fullWidth />
          </Link>
        </div>
      </Container>

      <div className="w-full h-[300px] relative">
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="50% 50%"
          alt="background image"
          src={"/assets/shared/bent-line.png"}
        />
      </div>
    </section>
  );
};

export default OurApproachContainer;

const data = [
  {
    title: "Insight",
    subTitle: "explore / understand",
    body: "Provide an understanding into your audience and their digital behavior.",
  },
  {
    title: "Innovation",
    subTitle: "develop | execute",
    body: "Increase engagement and conversions by implementing innovative digital strategies.",
  },
  {
    title: "Impact",
    subTitle: "assess / adjust",
    body: "Optimize campaigns to amplify impact and align with desired outcomes.",
  },
];
