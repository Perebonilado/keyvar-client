import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import FieldFocusItem from "./FieldFocusItem";

const FieldFocusContainer: FC = () => {
  return (
    <section className="pb-20">
      <Container>
        <h2 className="text-3xl font-semibold">Our field focus</h2>

        <p className="text-sm w-full max-w-[500px] leading-relaxed mt-10">
          We unlock the potential of diverse industries with our{" "}
          <span className="text-[#2C00B9]">strategic </span>
          <span className="text-[#2C00B9]">
            digital marketing solutions.
          </span>{" "}
          From law firms to real estate agencies and beyond, we specialize in
          crafting strategies that elevate your brand and drive online success.
        </p>

        <div className="flex justify-center gap-6 flex-wrap mt-14">
          {data.map((d, idx) => (
            <FieldFocusItem body={d} key={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FieldFocusContainer;

const data = [
  "Professional services",
  "Healthcare and Life Sciences",
  "Education and Nonprofits",
  "Hospitality and Tourism",
  "Technology and IT services",
  "Finance and Banking",
];
