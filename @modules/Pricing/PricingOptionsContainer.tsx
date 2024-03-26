import React, { FC } from "react";
import Tab from "./Tab";

const PricingOptionsContainer: FC = () => {
  const tabs = [
    {
      key: "1",
      subTitle: "I want a plan that focuses on a specific area",
      title: "Individual",
    },
    {
      key: "2",
      subTitle: "I want a plan with more touchpoints",
      title: "Tailored",
    },
  ];
  return (
    <section>
      <Tab headers={tabs} />
    </section>
  );
};

export default PricingOptionsContainer;
