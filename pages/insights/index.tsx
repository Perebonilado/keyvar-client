import Banner from "@/@modules/Insights/Banner/Banner";
import InsightItemContainer from "@/@modules/Insights/InsightItemContainer";
import InsightSubBanner from "@/@modules/Insights/InsightSubBanner";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";
import React from "react";

const Insights: NextPage = () => {
  return (
    <>
      <AppHead title="Insights" />
      <AppLayout>
        <Banner />
        <InsightSubBanner />
        <InsightItemContainer />
      </AppLayout>
    </>
  );
};

export default Insights;
