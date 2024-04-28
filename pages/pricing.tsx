import Banner from "@/@modules/Pricing/Banner/Banner";
import PricingOptionsContainer from "@/@modules/Pricing/PricingOptionsContainer";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";
import React from "react";

const Pricing: NextPage = () => {
  return (
    <>
      <AppHead title="Pricing" />
      <AppLayout>
        <Banner />
        <PricingOptionsContainer />
      </AppLayout>
    </>
  );
};

export default Pricing;
