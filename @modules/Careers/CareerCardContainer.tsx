import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import CareerCard from "./CareerCard";
import Button from "@/@shared/ui-components/Button";
import Link from "next/link";
import jobOpenings from "../../json-data/job-openings.json";

const CareerCardContainer: FC = () => {
  return (
    <Container>
      <section className="py-20 gap-8 grid grid-cols-1 md:grid-cols-2">
        {jobOpenings.map((opening, idx) => {
          return <CareerCard {...opening} key={idx} />;
        })}
      </section>

      <div className="pb-14 flex flex-col gap-7 text-center">
        <div className="w-full mx-auto max-w-[300px]">
          <p className="text-sm mb-3">See a role you’re interested in?</p>
          <Button title="Apply" fullWidth />

          <Link href={"/"}>
            <Button
              title="Home"
              variant="text"
              className="mx-auto mt-14 !gap-2"
              starticon={<div className="text-black">{"<"}</div>}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CareerCardContainer;
