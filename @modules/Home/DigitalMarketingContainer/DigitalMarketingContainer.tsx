import Avatar from "@/@shared/components/Avatar";
import { NavLinks } from "@/@shared/constants";
import Button from "@/@shared/ui-components/Button";
import Container from "@/@shared/ui-components/Container";
import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import s from "./styles.module.css";

const DigitalMarketingContainer: FC = () => {
  return (
    <section className="py-20 relative">
      <Container>
        <div className="flex max-md:flex-col pt-10 max-md:gap-16">
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

              <Link href={NavLinks.pricing.link}>
                <Button
                  title="Learn more"
                  variant="outlined"
                  size="large"
                  className="mt-16"
                />
              </Link>
            </div>
          </div>

          <div
            style={{ flex: 1 }}
            className={`flex flex-col justify-end items-end mt-[250px] max-md:mt-0 ${s.founderBgContainer}`}
          >
            <div className="flex flex-col items-end pb-10">
              <Avatar
                alt="Founder's Image: Kalada Nemieboka"
                fallBack="Kalada"
                imageUrl="/assets/about-us/kalada.png"
                size="lg"
              />
              <p className="mt-3 font-bold">Kalada Nemieboka</p>
              <p className="text-sm">Founder and Senior Analytics Consultant</p>
            </div>

            <div className={`absolute w-full h-[400px] left-0`}>
              <div className="relative w-full h-full">
                <Image
                  layout="fill"
                  objectFit="contain"
                  objectPosition="100% 100%"
                  alt="background image"
                  src={"/assets/shared/founder-bg.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DigitalMarketingContainer;
