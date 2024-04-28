import React, { FC, useEffect, useState } from "react";
import Tab from "./Tab";
import Container from "@/@shared/ui-components/Container";
import PricingCard from "./PricingCard";
import pricingPlans from "../../json-data/pricing-plans.json";
import { PricingPlan } from "@/models/Pricing";
import Button from "@/@shared/ui-components/Button";
import { NavLinks } from "@/@shared/constants";
import { useRouter } from "next/router";

const PricingOptionsContainer: FC = () => {
  const [plans, setPlans] = useState([...pricingPlans] as PricingPlan[]);
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<string>("1");
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

  const getTabCategoryFromKey = (key: string) => {
    return tabs.find((item) => item.key === key)?.title.toLowerCase() || "";
  };

  useEffect(() => {
    if (activeTab) {
      setPlans(
        (pricingPlans as PricingPlan[]).filter(
          (item) =>
            item.category.toLowerCase() === getTabCategoryFromKey(activeTab)
        )
      );
    }
  }, [activeTab]);
  
  return (
    <section>
      <Tab
        headers={tabs}
        handleGetActiveTabKey={(key) => {
          setActiveTab(key);
        }}
      />
      <Container>
        <div className="flex justify-center flex-wrap gap-16 w-full mx-auto max-w-[840px] py-14">
          {plans.map((plan, idx) => {
            return <PricingCard {...plan} key={idx} />;
          })}
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-center w-full mx-auto sm:max-w-[370px] pb-16">
          <p>For more details on any of our services</p>

          <Button
            title="Get in touch"
            fullWidth
            onClick={() => {
              router.push(NavLinks.salesDiscoveryCall.link);
            }}
            role="link"
            size="large"
          />
        </div>
      </Container>
    </section>
  );
};

export default PricingOptionsContainer;
